import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import environment from './env/environment';
import { UsersModule } from './users/users.module';
import { CompanyModule } from './company/company.module';
import { AptitudeTestModule } from './aptitude-test/aptitude-test.module';

@Module({
  imports: [
    MongooseModule.forRoot(environment.mongoUrl),
    UsersModule,
    CompanyModule,
    AptitudeTestModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
