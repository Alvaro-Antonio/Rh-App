export class ConfigService {

  private urlService: string;

  constructor() {

      this.urlService = 'http://localhost:4200/api/';
  }

  getUrlService(): string {

      return this.urlService;
  }

}
