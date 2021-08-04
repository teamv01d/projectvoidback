import {
    Body,
    Controller,
    Get,
    Post,
    Delete,
    Patch,
    Param,
    BadRequestException,
  } from '@nestjs/common';
  import { CreateCompanyDto } from './dto/create-company.dto';
  import { UpdateCompanyDto } from './dto/update-company.dto';
  import { CompanyService } from './company.service';
import { Company } from 'src/entities/company.entity';
import { CompanyLoginService } from './logincompany/company-login.service';
  
  //return yanında kullanılması gereken tırnak işareti `
  
  @Controller('company')
  export class CompanyController {
    constructor(
      private readonly companyService: CompanyService,
      private companyLoginService: CompanyLoginService,
    ) {}

    //register için kullanımda
    @Post('register')
    async register(@Body() body: CreateCompanyDto) {
      body.password = await this.companyService.convertToHash(body.password);
      return this.companyService.create(body);
    }

    //sign in için kullanımda
    @Post('login')
    async createUser(@Body() body): Promise<Company[]> {
      return await this.companyLoginService.loginCompany(body);
    }

    @Get()
    findAll() {
      return this.companyService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.companyService.findOne2(id);
    }

    @Patch(':id')
    update(
      @Param('id') id: string,
      @Body() updateCompanyDto: UpdateCompanyDto,
    ) {
      return this.companyService.update(id, updateCompanyDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.companyService.delete(id);
    }
  }
  