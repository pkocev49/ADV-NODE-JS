import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { RolesGuard } from 'src/common/role-guard/roles-guard';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: 'some_secret',
      signOptions: { expiresIn: '1000000s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, RolesGuard],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
