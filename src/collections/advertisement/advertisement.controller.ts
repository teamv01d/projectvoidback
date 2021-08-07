import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CreateAdvertisementDto } from './dto/create-advertisement.dto';
import { AdvertisementService } from './advertisement.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

//return yanında kullanılması gereken tırnak işareti `

@Controller('advertisement')
export class AdvertisementController {
  constructor(private readonly advertisementService: AdvertisementService) {}

  @UseGuards(JwtAuthGuard)
  @Post('create')
  register(@Body() createAdvertisementDto: CreateAdvertisementDto) {
    return this.advertisementService.create(createAdvertisementDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.advertisementService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('one')
  findOne(@Request() req) {
    return this.advertisementService.findOne(req._id);
  }
}
