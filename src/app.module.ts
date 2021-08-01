import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import environment from './env/environment';
import { UsersModule } from './collections/users/users.module';
import { AuthModule } from './auth-folder/auth/auth.module';
import { CompanyController } from './collections/company/company.controller';
import { CompanyModule } from './collections/company/company.module';
import { AdvertisementController } from './collections/advertisement/advertisement.controller';
import { AdvertisementModule } from './collections/advertisement/advertisement.module';

@Module({
  imports: [
    UsersModule,
    CompanyModule,
    AuthModule,
    AdvertisementModule,
    MongooseModule.forRoot(environment.mongoUrl),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
