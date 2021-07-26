import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import environment from './env/environment';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, MongooseModule.forRoot(environment.mongoUrl)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
