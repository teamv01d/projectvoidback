import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import environment from './env/environment';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CompanyController } from './company/company.controller';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [
    UsersModule,
    CompanyModule,
    AuthModule,
    MongooseModule.forRoot(environment.mongoUrl),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
