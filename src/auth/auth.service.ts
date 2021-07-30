import { Injectable } from '@nestjs/common';
import { CompanyService } from 'src/company/company.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user && user.password === pass) {
      //const { password, ...result } = user;
      return user.id;
    }
    return null;
  }
}
