import {
  Body,
  Controller,
  Get,
  Param,
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
  findAll(@Request() req) {
    return this.advertisementService.findAll(req.user.user.role);
  }

  @UseGuards(JwtAuthGuard)
  @Get('one')
  findOne(@Param() id:string) {
    return this.advertisementService.findOne(id);
  }
}
