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
import { TokenMiddleware } from './collections/users/middleware/tokens.middleware';

@Module({
  imports: [
    UsersModule,
    CompanyModule,
    AdvertisementModule,
    MongooseModule.forRoot(environment.mongoUrl),
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TokenMiddleware)
      .exclude('/users/login', '/users/register')
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
