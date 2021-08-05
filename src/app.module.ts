import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import environment from './env/environment';
import { UsersModule } from './collections/users/users.module';
import { CompanyModule } from './collections/company/company.module';
import { AdvertisementModule } from './collections/advertisement/advertisement.module';
import { AdvertisementQuestionModule } from './collections/advertisementquestion/advertisementquestion.module';
import { AptitudeTestQuestionModule } from './collections/aptitudetestquestion/aptitudetestquestion.module';
import { TokenMiddleware } from './collections/users/middleware/token.middelware';

@Module({
  imports: [
    UsersModule,
    CompanyModule,
    AdvertisementModule,
    AdvertisementQuestionModule,
    AptitudeTestQuestionModule,
    MongooseModule.forRoot(environment.mongoUrl),
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TokenMiddleware)
      .exclude(
        '/users/login',
        '/users/register',
        '/company/login',
        '/company/register',
      )
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
