import { PartialType } from "@nestjs/mapped-types";
import { CreateCompanyQuestionDto } from "./create-companyquestion.dto";

export class UpdateCompanyQuestionDto extends PartialType(CreateCompanyQuestionDto){}
