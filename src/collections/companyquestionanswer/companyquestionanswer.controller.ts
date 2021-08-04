import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Param,
} from '@nestjs/common';
import { CompanyQuestionAnswerService } from './companyquestionanswer.service';
import { CreateCompanyQuestionAnswerDto } from './dto/create-companyquestion.dto';
import { UpdateCompanyQuestionAnswerDto } from './dto/update-companyquestionanswer.dto';

//return yanında kullanılması gereken tırnak işareti `

@Controller('companyquestionanswer')
export class CompanyQuestionAnswerController {
  constructor(private readonly companyQuestionAnswerService: CompanyQuestionAnswerService) { }

  //register için kullanımda
  @Post('companyquestionanswercreate')
  register(@Body() createCompanyQuestionAnswerDto: CreateCompanyQuestionAnswerDto) {
    return this.companyQuestionAnswerService.create(createCompanyQuestionAnswerDto);
  }
  
  
  @Get()
  findAll() {
    return this.companyQuestionAnswerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyQuestionAnswerService.findOne(id);
  }

  @Patch(':id')
  updateProfile(@Param('id') id: string, @Body() updateCompanyQuestionAnswerDto: UpdateCompanyQuestionAnswerDto) {
    return this.companyQuestionAnswerService.updateCompanyQuestionAnswer(id, updateCompanyQuestionAnswerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyQuestionAnswerService.delete(id);
  }
}
