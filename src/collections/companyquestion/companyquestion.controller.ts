import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Param,
} from '@nestjs/common';
import { CompanyQuestionService } from './companyquestion.service';
import { CreateCompanyQuestionDto } from './dto/create-companyquestion.dto';
import { UpdateCompanyQuestionDto } from './dto/update-companyquestion.dto';

//return yanında kullanılması gereken tırnak işareti `

@Controller('companyquestion')
export class CompanyQuestionController {
  constructor(private readonly companyQuestionService: CompanyQuestionService) { }

  //register için kullanımda
  @Post('companyquestioncreate')
  register(@Body() createCompanyQuestionDto: CreateCompanyQuestionDto) {
    return this.companyQuestionService.create(createCompanyQuestionDto);
  }
  
  
  @Get()
  findAll() {
    return this.companyQuestionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyQuestionService.findOne(id);
  }

  @Patch(':id')
  updateProfile(@Param('id') id: string, @Body() updateCompanyQuestionDto: UpdateCompanyQuestionDto) {
    return this.companyQuestionService.updateCompanyQuestion(id, updateCompanyQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyQuestionService.delete(id);
  }
}
