import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import environment from './env/environment';
import { UsersModule } from './collections/users/users.module';
import { CompanyModule } from './collections/company/company.module';
import { AdvertisementModule } from './collections/advertisement/advertisement.module';
import { CompanyQuestionModule } from './collections/companyquestion/companyquestion.module';
import { AdvertisementQuestionModule } from './collections/advertisementquestion/advertisementquestion.module';
import { CompanyQuestionAnswerModule } from './collections/companyquestionanswer/companyquestionanswer.module';

@Module({
  imports: [
    UsersModule,
    CompanyModule,
    AdvertisementModule,
    CompanyQuestionModule,
    AdvertisementQuestionModule,
    CompanyQuestionAnswerModule,
    MongooseModule.forRoot(environment.mongoUrl),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
 