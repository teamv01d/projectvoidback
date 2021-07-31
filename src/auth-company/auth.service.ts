import { Injectable } from '@nestjs/common';
import { CompanyService } from 'src/company/company.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthServiceCompany {
  constructor(private companyService: CompanyService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const company = await this.companyService.findOne(email);
    if (company && company.password === pass) {
      //const { password, ...result } = user;
      return company.id;
    }
    return null;
  }
}
