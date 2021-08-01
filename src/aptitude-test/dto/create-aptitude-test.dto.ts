import { IsString } from 'class-validator';
import { QuestionType } from 'src/entities/question-type.entity';
import { SubjectClass } from 'src/entities/subject.entity';

export class CreateAptitudeTestDto {
  @IsString()
  subjectID: SubjectClass;

  @IsString()
  question_type: QuestionType;
""
  @IsString()
  question: string;
}
