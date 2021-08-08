import {
  Controller,
  Get,
  Param,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AptitudeTestQuestionService } from './aptitudetestquestion.service';


@Controller('testquestion')
export class AptitudeTestQuestionController {
  constructor(
    private readonly aptitudeTestQuestionService: AptitudeTestQuestionService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.aptitudeTestQuestionService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('mongo')
  findJava(@Param() subject:string) {
    return this.aptitudeTestQuestionService.findBySubject(subject);
  }
}
