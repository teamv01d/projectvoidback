import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import environment from './env/environment';
import { UsersModule } from './collections/users/users.module';
import { CompanyModule } from './collections/company/company.module';
import { AdvertisementModule } from './collections/advertisement/advertisement.module';
import { AdvertisementQuestionModule } from './collections/advertisementquestion/advertisementquestion.module';


@Module({
  imports: [
    UsersModule,
    CompanyModule,
    AdvertisementModule,
    AdvertisementQuestionModule,
    MongooseModule.forRoot(environment.mongoUrl),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
 