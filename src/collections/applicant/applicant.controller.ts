import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Param,
} from '@nestjs/common';
import { ApplicantService } from './applicant.service';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantDto } from './dto/update-applicant.dto';

@Controller('applicant')
export class ApplicantController {
  constructor(private readonly applicantService: ApplicantService) {}

  @Post('create')
  register(@Body() createApplicantDto: CreateApplicantDto) {
    return this.applicantService.create(createApplicantDto);
  }

  @Get()
  findAll() {
    return this.applicantService.findAll();
  }

  @Get('appusers')
  getAppUsers() {
    return this.applicantService.findUsersByApp();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicantService.findOne(id);
  }

  @Patch(':id')
  updateApplicant(
    @Param('id') id: string,
    @Body() updateApplicantDto: UpdateApplicantDto,
  ) {
    return this.applicantService.updateApplicant(id, updateApplicantDto);
  }
}
