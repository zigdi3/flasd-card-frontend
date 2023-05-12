import { environment } from 'src/environments/environment';

export class AppConfig {
  static APP_VERSION: string = environment.AppVersion;
  static APP_URL: string = environment.appURL;
}
