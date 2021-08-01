import {
    Body,
    Controller,
    Get,
    Post,
    Delete,
    Patch,
    Param,
  } from '@nestjs/common';
  import { CreateAdvertisementDto } from './dto/create-advertisement.dto';
  import { UpdateAdvertisementDto } from './dto/update-advertisement.dto';
  import { AdvertisementService } from './advertisement.service';
  
  //return yanında kullanılması gereken tırnak işareti `
  
  @Controller('advertisement')
  export class AdvertisementController {
    constructor(private readonly advertisementService: AdvertisementService) { }
  
    //register için kullanımda
    @Post('advertisementcreate')
    register(@Body() createAdvertisementDto: CreateAdvertisementDto) {
      return this.advertisementService.create(createAdvertisementDto);
    }
    
    
    @Get()
    findAll() {
      return this.advertisementService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.advertisementService.findOne(id);
    }
  
    @Patch(':id')
    updateAdvertisement(@Param('id') id: string, @Body() updateAdvertisementDto: UpdateAdvertisementDto) {
      return this.advertisementService.updateAdvertisement(id, updateAdvertisementDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.advertisementService.delete(id);
    }
  }
  