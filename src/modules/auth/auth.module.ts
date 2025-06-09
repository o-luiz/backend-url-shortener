import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthController } from './controllers/auth.controller';

import { InMemoryAuthRepository } from './repositories/inMemory/InMemoryAuth.repository';
import { AuthRepository } from './repositories/auth.repository';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    JwtStrategy,
    {
      provide: AuthRepository,
      useClass: InMemoryAuthRepository,
    },
  ],
  exports: [JwtModule],
})
export class AuthModule {}
