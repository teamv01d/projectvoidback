import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthServiceCompany } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authServiceCompany: AuthServiceCompany) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<any> {
    const company = await this.authServiceCompany.validateUser(email, password);
    if (!company) {
      throw new UnauthorizedException();
    }
    return company;
  }
}
