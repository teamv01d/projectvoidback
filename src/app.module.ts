import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import environment from './env/environment';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CompanyController } from './company/company.controller';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    MongooseModule.forRoot(environment.mongoUrl),
  ],
  controllers: [CompanyController],
  providers: [],
})
export class AppModule {}
