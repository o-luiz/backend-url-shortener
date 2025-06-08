import { Injectable } from '@nestjs/common';
import { EnvService } from './modules/shared/env/env.service';

@Injectable()
export class AppService {
  constructor(private envService: EnvService) {}

  getHello() {
    const envData = {
      dbUser: this.envService.get('DB_USER'),
      dbPassword: this.envService.get('DB_PASSWORD'),
      dbHost: this.envService.get('DB_HOST'),
      dbName: this.envService.get('DB_NAME'),
      dbUrl: this.envService.get('DB_URL'),
      port: this.envService.get('PORT'),
      jwtSecret: this.envService.get('JWT_SECRET'),
      urlShortenerDomain: this.envService.get('URL_SHORTENER_DOMAIN'),
    };

    return envData;
  }
}
