import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Param,
} from '@nestjs/common';
import { AptitudeTestQuestionService } from './aptitudetestquestion.service';
import { CreateAptitudeTestQuestionDto } from './dto/create-aptitudetestquestion.dto';
import { UpdateAptitudeTestQuestionDto } from './dto/update-aptitudetestquestion.dto';


@Controller('aptitudetestquestion')
export class AptitudeTestQuestionController {
  constructor(private readonly aptitudeTestQuestionService: AptitudeTestQuestionService) { }

  @Post('aptitudetestquestioncreate')
  register(@Body() createAptitudeTestQuestionDto: CreateAptitudeTestQuestionDto) {
    return this.aptitudeTestQuestionService.create(createAptitudeTestQuestionDto);
  }
  
  
  @Get()
  findAll() {
    return this.aptitudeTestQuestionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aptitudeTestQuestionService.findOne(id);
  }

  @Patch(':id')
  updateAptitudeTestQuestion(@Param('id') id: string, @Body() updateAptitudeTestQuestionDto: UpdateAptitudeTestQuestionDto) {
    return this.aptitudeTestQuestionService.updateAptitudeTestQuestion(id, updateAptitudeTestQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aptitudeTestQuestionService.delete(id);
  }
}
