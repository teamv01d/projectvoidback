import { AdvertisementModel } from "./advertisement.model";
import { QuestionTypeModel } from "./question-type.model";
import { SubjectModel } from "./subject.model";

export class CompanyQuestionModel{
    company_questionID: String;
    advertisementID: AdvertisementModel;
    subjectID: SubjectModel;
    question_typeID: QuestionTypeModel;
    question: String;
}