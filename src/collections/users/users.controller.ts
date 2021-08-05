import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Request,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

//return yanında kullanılması gereken tırnak işareti `

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //register için kullanımda
  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  //sign in için kullanımda
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id')
  postProfile(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateProfile(id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  updateProfile(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateProfile(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
}
