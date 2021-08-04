import { PartialType } from "@nestjs/mapped-types";
import { CreateCompanyQuestionAnswerDto } from "./create-companyquestion.dto";

export class UpdateCompanyQuestionAnswerDto extends PartialType(CreateCompanyQuestionAnswerDto){}
