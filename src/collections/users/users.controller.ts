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
import { FormDataRequest } from 'nestjs-form-data';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { CreateCompanyDto } from './dto/create-company.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

//return yanında kullanılması gereken tırnak işareti `

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //register için kullanımda
  @Post('register')
  async userRegister(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Post('company/register')
  async companyRegister(@Body() body: CreateCompanyDto) {
    body.role = false;
    return this.usersService.createCompany(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard, LocalAuthGuard)
  @Post(':id')
  @FormDataRequest()
  postProfile(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): any {
    return this.usersService.updateProfile(id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch()
  @FormDataRequest()
  updateProfile(@Request() req, @Body() updateUserDto: UpdateUserDto): any {
    const id = req.user.user._id;
    return this.usersService.updateProfile(id, updateUserDto);
  }

}
