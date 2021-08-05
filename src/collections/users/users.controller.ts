import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Put,
  Req,
} from '@nestjs/common';
import { Users } from 'src/entities/users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginService } from './login/user-login.service';
import { UsersService } from './users.service';

//return yanında kullanılması gereken tırnak işareti `

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private loginService: LoginService,
  ) {}

  //register için kullanımda
  @Post('register')
  async register(@Body() body: CreateUserDto) {
    body.password = await this.usersService.convertToHash(body.password);
    return this.usersService.create(body);
  }

  //sign in için kullanımda
  @Post('login')
  async createUser(@Body() body): Promise<Users[]> {
    return await this.loginService.loginUser(body);
  }

  @Get('all')
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  updateProfile(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateProfile(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
}
