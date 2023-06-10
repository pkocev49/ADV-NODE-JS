import {
  Controller,
  Get,
  Request,
  UseGuards,
  Post,
  Body,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from 'src/common/local-auth/local-auth.guard';
import { CreateUserDto } from 'src/users/dto/user.dto';
import { User } from 'src/users/entities/user.entity';
import { RolesGuard } from 'src/common/role-guard/roles-guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req) {
    console.log(req.user, 'here');
    return this.authService.login(req.user);
  }

  @Post('register')
  async register(@Body() body: CreateUserDto) {
    const id = await this.authService.register(body);

    return {
      message: 'User is created',
      id: id,
    };
  }
}
