import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApplicantService } from './applicant.service';
import { CreateApplicantDto } from './dto/create-applicant.dto';

@Controller('applicant')
export class ApplicantController {
  constructor(private readonly applicantService: ApplicantService) {}

  //başvuru oluştur
  @UseGuards(JwtAuthGuard)
  @Post('create')
  register(@Body() createApplicantDto: CreateApplicantDto) {
    return this.applicantService.create(createApplicantDto);
  }

  //başvuranları getir
  @UseGuards(JwtAuthGuard)
  @Get('appusers')
  getAppUsers() {
    return this.applicantService.findUsersByApp();
  }

  @Get('userapps')
  getUsersApp() {
    return this.applicantService.findAppByUser();
  }
}
