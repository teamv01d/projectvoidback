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
import { FormDataRequest } from 'nestjs-form-data';

//return yanında kullanılması gereken tırnak işareti `

@Controller('advertisement')
export class AdvertisementController {
  constructor(private readonly advertisementService: AdvertisementService) {}

  @UseGuards(JwtAuthGuard)
  @Post('create')
  @FormDataRequest()
  createAdv(@Request() req, @Body() body: CreateAdvertisementDto) {
    return this.advertisementService.create({
      ...body,
      companyID: req.user.user._id,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.advertisementService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('one')
  findOne(@Param() id: string) {
    return this.advertisementService.findOne(id);
  }
}
