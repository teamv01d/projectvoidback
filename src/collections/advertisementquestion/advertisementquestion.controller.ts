import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Param,
} from '@nestjs/common';
import { AdvertisementQuestionService } from './advertisementquestion.service';
import { CreateAdvertisementQuestionDto } from './dto/create-advertisementquestion.dto';
import { UpdateAdvertisementQuestionDto } from './dto/update-advertisementquestion.dto';


@Controller('advertisementquestion')
export class AdvertisementQuestionController {
  constructor(private readonly advertisementQuestionService: AdvertisementQuestionService) { }

  @Post('advertisementquestioncreate')
  register(@Body() createAdvertisementQuestionDto: CreateAdvertisementQuestionDto) {
    return this.advertisementQuestionService.create(createAdvertisementQuestionDto);
  }
  
  
  @Get()
  findAll() {
    return this.advertisementQuestionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.advertisementQuestionService.findOne(id);
  }

  @Patch(':id')
  updateAdvertisementQuestion(@Param('id') id: string, @Body() updateAdvertisementQuestionDto: UpdateAdvertisementQuestionDto) {
    return this.advertisementQuestionService.updateAdvertisementQuestion(id, updateAdvertisementQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.advertisementQuestionService.delete(id);
  }
}
