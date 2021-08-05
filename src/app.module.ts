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

@Module({
  imports: [
    UsersModule,
    AdvertisementModule,
    AdvertisementQuestionModule,
    AptitudeTestQuestionModule,
    UploadModule,
    MulterModule.register({
      dest: './uploads',
    }),
    MongooseModule.forRoot(environment.mongoUrl),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
