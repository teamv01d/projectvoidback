import { AdvertisementModel } from "./advertisement.model";
import { AptitudeTestQuestionModel } from "./aptitude-test-question.model";
import { CompanyQuestionModel } from "./company-question.model";

export class AdvertisementQuestionModel{
    advertisement_questionID: String;
    advertisementID: AdvertisementModel;
    questionID: AptitudeTestQuestionModel;
    company_questionID: CompanyQuestionModel;
    
}