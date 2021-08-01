import { Injectable } from '@nestjs/common';
import { CompanyService } from 'src/collections/company/company.service';
import { UsersService } from 'src/collections/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findUserByEmail(email);
    if (user && user.password === pass) {
      //const { password, ...result } = user;
      return user;
    }
    return null;
  }
}
