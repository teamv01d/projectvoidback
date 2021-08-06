import {
  Module,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import environment from './env/environment';
import { UsersModule } from './collections/users/users.module';
import { AdvertisementModule } from './collections/advertisement/advertisement.module';
import { AdvertisementQuestionModule } from './collections/advertisementquestion/advertisementquestion.module';
import { AptitudeTestQuestionModule } from './collections/aptitudetestquestion/aptitudetestquestion.module';
import { UploadModule } from './upload/upload.module';
import { MulterModule } from '@nestjs/platform-express';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { ApplicantModule } from './collections/applicant/applicant.module';

@Module({
  imports: [
    UsersModule,
    AdvertisementModule,
    AdvertisementQuestionModule,
    AptitudeTestQuestionModule,
    ApplicantModule,
    UploadModule,
    MulterModule.register({
      dest: './uploads',
    }),
    MongooseModule.forRoot(environment.mongoUrl),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
