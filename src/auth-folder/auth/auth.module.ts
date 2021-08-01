import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { CompanyModule } from 'src/collections/company/company.module';
import { UsersModule } from 'src/collections/users/users.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
