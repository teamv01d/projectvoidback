import { CompanyQuestionModel } from "./company-question.model";

export class AptitudeTestAnswerModel{
    company_answerID: String;
    company_questionID: CompanyQuestionModel;
    selection: String;
    answer: String;
}