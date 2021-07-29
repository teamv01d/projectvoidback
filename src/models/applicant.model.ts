import { AdvertisementModel } from "./advertisement.model";
import { CompanyModel } from "./company.model";
import { UserModel } from "./user.model";

export class ApplicantModel{
    applicantID: String;
    userID: UserModel;
    companyID: CompanyModel;
    advertisementID: AdvertisementModel;
    scor: Number;
}