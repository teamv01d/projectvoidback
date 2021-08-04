import { Injectable } from '@nestjs/common';
import { Users } from 'src/entities/users.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsersService } from 'src/collections/users/users.service';
import environment from 'src/env/environment';
import * as jwt from 'jsonwebtoken';
import { UserLoginDto } from '../dto/login-user.dto';

@Injectable()
export class LoginService {
  constructor(
    @InjectModel(Users.name) private readonly usersModel: Model<Users>,
    private readonly userService: UsersService,
  ) {}

  async loginUser(user: UserLoginDto): Promise<any> {
    try {
      const existUser = await this.usersModel
        .findOne({
          email: user.email,
        })
        .exec();

      if (existUser) {
        let checkPwd;
        await this.userService
          .compareHashes(user.password, existUser.password)
          .then((resp) => {
            if (resp) {
              checkPwd = true;
            } else {
              checkPwd = false;
            }
          });

        if (checkPwd) {
          const authJsonWebToken = jwt.sign(
            { user: existUser },
            environment.jwtText,
          );
          return await { success: true, value: authJsonWebToken };
        } else {
          return await {
            success: false,
            response: 'user password is incorrect!',
          };
        }
      } else {
        return await { success: false, response: 'user does not exist!' };
      }
    } catch (ex) {
      return await {
        success: false,
        response: 'something went wrong while login process!',
        exception: ex,
      };
    }
  }
}
