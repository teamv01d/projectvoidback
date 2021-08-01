import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Request,
  Param,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from 'src/auth-folder/auth/auth.service';
import { LocalAuthGuard } from 'src/auth-folder/auth/local-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

//return yanında kullanılması gereken tırnak işareti `

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService,
  private readonly authService:AuthService) { }

  //register için kullanımda
  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  
  //sign in için kullanımda
  @UseGuards(LocalAuthGuard)
  @Post('login')
  signIn(@Request() req): any {
    return req.user;
  }
  
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  updateProfile(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateProfile(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
}
