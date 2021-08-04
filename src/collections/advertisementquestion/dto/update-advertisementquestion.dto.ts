import { PartialType } from '@nestjs/mapped-types';
import { CreateAdvertisementQuestionDto } from './create-advertisementquestion.dto';

export class UpdateAdvertisementQuestionDto extends PartialType(CreateAdvertisementQuestionDto) {}
