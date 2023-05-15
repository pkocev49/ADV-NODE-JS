import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/users/entities/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from 'src/common/local-auth/local-auth.guard';
import { CreateUserDto } from 'src/users/dto/user.dto';
import { Role } from 'src/interfaces/role.enum';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() userDto: CreateUserDto) {
    const token = await this.authService.login(userDto);
    return { access_token: token };
  }

  @Post('register')
  async register(@Body() body: CreateUserDto) {
    console.log(body);
    const id = await this.authService.register(body);
    return {
      message: 'User was created',
      id: id,
    };
  }
}
