import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { FormDataRequest } from 'nestjs-form-data';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AdvertisementQuestionService } from './advertisementquestion.service';
import { CreateAdvertisementQuestionDto } from './dto/create-advertisementquestion.dto';

@Controller('advquestion')
export class AdvertisementQuestionController {
  constructor(
    private readonly advertisementQuestionService: AdvertisementQuestionService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post('create')
  @FormDataRequest()
  createQuestion(
    @Body() createAdvertisementQuestionDto: CreateAdvertisementQuestionDto,
  ) {
    return this.advertisementQuestionService.create(
      createAdvertisementQuestionDto,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.advertisementQuestionService.findAll();
  }
}
