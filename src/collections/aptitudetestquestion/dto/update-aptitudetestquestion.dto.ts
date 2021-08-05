import { PartialType } from '@nestjs/mapped-types';
import { CreateAptitudeTestQuestionDto } from './create-aptitudetestquestion.dto';

export class UpdateAptitudeTestQuestionDto extends PartialType(CreateAptitudeTestQuestionDto) {}
