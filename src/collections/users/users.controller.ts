import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
  Put,
} from '@nestjs/common';
import { FormDataRequest } from 'nestjs-form-data';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateCompanyDto } from './dto/create-company.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

//return yanında kullanılması gereken tırnak işareti `

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //user register için kullanımda
  @Post('register')
  async userRegister(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  //company register için kullanımda
  @Post('company/register')
  async companyRegister(@Body() body: CreateCompanyDto) {
    body.role = false;
    return this.usersService.createCompany(body);
  }

  //user verilerini getir
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  //bütün userları getir
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  //profili ilk kez gönder
  @UseGuards(JwtAuthGuard)
  @Post()
  @FormDataRequest()
  postProfile(@Request() req, @Body() updateUserDto: UpdateUserDto): any {
    const id = req.user.user._id;
    return this.usersService.updateProfile(id, updateUserDto);
  }

  //profili güncelle
  @UseGuards(JwtAuthGuard)
  @Put()
  @FormDataRequest()
  updateProfile(@Request() req, @Body() updateUserDto: UpdateUserDto): any {
    const id = req.user.user._id;
    return this.usersService.updateProfile(id, updateUserDto);
  }

  //profil fotoğrafı yükle
  @UseGuards(JwtAuthGuard)
  @Post('photo')
  @FormDataRequest()
  postPhoto(@Request() req, @Body() UpdateUserDto: UpdateUserDto): any {
    const id = req.user.user._id;
    return this.usersService.updateProfile(id, UpdateUserDto);
  }

  //profil fotoğrafı güncelle
  @UseGuards(JwtAuthGuard)
  @Put('photo')
  @FormDataRequest()
  putPhoto(@Request() req, @Body() UpdateUserDto: UpdateUserDto): any {
    const id = req.user.user._id;
    return this.usersService.updateProfile(id, UpdateUserDto);
  }
}
