import { CompanyModel } from "./company.model";

export class AdvertisementModel{
    advertisementID: String;
    companyID: CompanyModel;
    advertisement_name: String;
    description: String;
    start_date: Date;
    end_date: Date;
    city: String;
    advertisement_type: String;
}