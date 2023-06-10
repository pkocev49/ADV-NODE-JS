import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/users/entities/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from 'src/common/local-auth/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post()
  async login(@Body() body: User, @Request() request: Request) {
    return this.authService.login(body);
  }
}
