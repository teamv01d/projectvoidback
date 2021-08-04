import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UsersSchema } from 'src/entities/users.entity';
import { UsersService } from '../users.service';
import { LoginService } from './user-login.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Users.name,
        schema: UsersSchema,
      },
    ]),
  ],
  controllers: [],
  providers: [LoginService, UsersService],
  exports:[LoginService]
})
export class LoginModule {}
