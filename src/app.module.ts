import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import environment from './env/environment';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CompanyController } from './company/company.controller';
import { CompanyModule } from './company/company.module';
import { AdvertisementController } from './advertisement/advertisement.controller';
import { AdvertisementModule } from './advertisement/advertisement.module';

@Module({
  imports: [
    UsersModule,
    CompanyModule,
    AuthModule,
    AdvertisementModule,
    MongooseModule.forRoot(environment.mongoUrl),
  ],
  controllers: [AdvertisementController],
  providers: [],
})
export class AppModule {}
