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
  
  //return yanında kullanılması gereken tırnak işareti `
  
  @Controller('company')
  export class CompanyController {
    constructor(private readonly companyService: CompanyService) { }
  
    //register için kullanımda
    @Post('companyregister')
    register(@Body() createCompanyDto: CreateCompanyDto) {
      return this.companyService.create(createCompanyDto);
    }
    
    //sign in için kullanımda
    @Post('companylogin')
    async login(@Body('email') email: string, @Body('password') password: string){
      const company = await this.companyService.findOne({email});

      if(!company){
        throw new BadRequestException('invalid credentials');
      }

      return company;
    }
    
    @Get()
    findAll() {
      return this.companyService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.companyService.findOne(id);
    }
  
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
      return this.companyService.update(id, updateCompanyDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.companyService.delete(id);
    }
  }
  