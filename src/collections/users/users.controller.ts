import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
  Patch,
} from '@nestjs/common';
import { FormDataRequest } from 'nestjs-form-data';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateCompanyDto } from './dto/create-company.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
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
    const userID = req.user.user._id;
    return this.usersService.findOne(userID);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getcompanyProfile(@Request() req) {
    const companyID = req.user.user._id;
    return this.usersService.findOne(companyID);
  }

  //profili güncelle
  @UseGuards(JwtAuthGuard)
  @Patch()
  @FormDataRequest()
  updateProfile(@Request() req, @Body() updateUserDto: UpdateUserDto): any {
    const id = req.user.user._id;
    return this.usersService.updateProfile(id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('company')
  @FormDataRequest()
  updateCompanyProfile(
    @Request() req,
    @Body() updateCompanyDto: UpdateCompanyDto,
  ): any {
    const id = req.user.user._id;
    return this.usersService.updateComProfile(id, updateCompanyDto);
  }

  //profil fotoğrafı güncelle
  @UseGuards(JwtAuthGuard)
  @Patch('photo')
  @FormDataRequest()
  patchPhoto(@Request() req, @Body() UpdateUserDto: UpdateUserDto): any {
    const id = req.user.user._id;
    return this.usersService.updateProfile(id, UpdateUserDto);
  }


  //cv güncelle
  @UseGuards(JwtAuthGuard)
  @Patch('cv')
  @FormDataRequest()
  patchCv(@Request() req, @Body() UpdateUserDto: UpdateUserDto): any {
    const id = req.user.user._id;
    return this.usersService.updateProfile(id, UpdateUserDto);
  }
}
