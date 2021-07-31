import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { CompanyModule } from 'src/company/company.module';
import { UsersModule } from 'src/users/users.module';
import { AuthServiceCompany } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [PassportModule,CompanyModule],
  providers: [AuthServiceCompany, LocalStrategy],
})
export class AuthModuleCompany {}
