import { Body, Controller, Get, Post } from '@nestjs/common';
import { AptitudeTestService } from './aptitude-test.service';
import { CreateAptitudeTestDto } from './dto/create-aptitude-test.dto';

@Controller('aptitude-test')
export class AptitudeTestController {
  constructor(private readonly aptitudeTestService: AptitudeTestService) {}

  @Get()
  findAll() {
    return this.aptitudeTestService.findAll();
  }

  @Post('save')
  createQuestion(@Body() createAptitudeTestDto: CreateAptitudeTestDto) {
    return this.aptitudeTestService.createAptitudeQuestion(
      createAptitudeTestDto,
    );
  }
}
