import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { EnvModule } from './modules/shared/env/env.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [EnvModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
