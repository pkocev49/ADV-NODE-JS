import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { AuthController } from './auth/auth.controller';
import { PassportModule } from '@nestjs/passport';
@Module({
  imports: [
    UsersModule,
    OrderModule,
    ProductModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'food_app',
      autoLoadEntities: true,
      synchronize: true,

      // logging: true,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
