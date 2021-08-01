import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from 'src/auth/auth.service';
import { Users, UsersSchema } from '../entities/users.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Users.name,
        schema: UsersSchema,
      }
    ])
  ],
  controllers: [UsersController],
  providers: [UsersService,AuthService],
  exports: [UsersService]
})
export class UsersModule {}
