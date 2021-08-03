import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UsersSchema } from '../../entities/users.entity';
import { LoginService } from './login/user-login.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Users.name,
        schema: UsersSchema,
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService,LoginService],
  exports: [UsersService],
})
export class UsersModule {}
