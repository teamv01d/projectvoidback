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
import { AppController } from './app.controller';
import { AuthModule } from './collections/users/auth/auth.module';

@Module({
  imports: [
    UsersModule,
    CompanyModule,
    AdvertisementModule,
    AuthModule,
    MongooseModule.forRoot(environment.mongoUrl),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TokenMiddleware)
      .exclude('/users/login', '/users/register', '/auth/login')
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
