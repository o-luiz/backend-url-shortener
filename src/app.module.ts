import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { EnvModule } from './modules/shared/env/Env.module';
import { AuthModule } from './modules/auth/Auth.module';

@Module({
  imports: [EnvModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
