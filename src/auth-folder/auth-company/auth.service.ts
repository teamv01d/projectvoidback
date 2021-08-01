import { Injectable } from '@nestjs/common';
import { CompanyService } from 'src/collections/company/company.service';
@Injectable()
export class AuthServiceCompany {
  constructor(private companyService: CompanyService) {}

  async validateCompany(email: string, pass: string): Promise<any> {
    const company = await this.companyService.findCompanyByEmail(email);
    if (company && company.password === pass) {
      //const { password, ...result } = company;
      return company;
    }
    return null;
  }
}
