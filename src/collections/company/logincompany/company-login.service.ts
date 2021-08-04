import { Injectable } from '@nestjs/common';
import { Users } from 'src/entities/users.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import environment from 'src/env/environment';
import * as jwt from 'jsonwebtoken';
import { CompanyLoginDto } from '../dto/login-company.dto';
import { Company } from 'src/entities/company.entity';
import { CompanyService } from '../company.service';

@Injectable()
export class CompanyLoginService {
  constructor(
    @InjectModel(Company.name) private readonly companyModel: Model<Company>,
    private readonly companyService: CompanyService,
  ) {}

  async loginCompany(company: CompanyLoginDto): Promise<any> {
    try {
      const existCompany = await this.companyModel
        .findOne({
          email: company.email,
        })
        .exec();

      if (existCompany) {
        let checkPwd;
        await this.companyService
          .compareHashes(company.password, existCompany.password)
          .then((resp) => {
            if (resp) {
              checkPwd = true;
            } else {
              checkPwd = false;
            }
          });

        if (checkPwd) {
          const authJsonWebToken = jwt.sign(
            { user: existCompany },
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
