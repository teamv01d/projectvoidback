import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller('auth')
export class AppController {
  constructor(private authService: AuthService) {}

  //signin işlemi için kullanılıyor.
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
