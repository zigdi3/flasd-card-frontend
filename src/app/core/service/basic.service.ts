import { HttpClient, HttpHeaders } from '@angular/common/http';

import { HeaderVO } from '../vo/header.vo';

export class BasicService {

  private baseResource: string;
  private baseHttp: HttpClient;
  private baseHeader: HeaderVO;

  constructor(resource: string, http: HttpClient, header: HeaderVO) {
    this.baseResource = resource;
    this.baseHttp = http;
    this.baseHeader = header;
  }


  getUrlContext(path?: string, baseUrl?: string): string {
    const urlContext = (baseUrl ? baseUrl : this.baseHeader.getBaseUrl()) + '/' + this.baseResource + (path ? path : '');
    return urlContext;
  }

  getHttp(): HttpClient {
    return this.baseHttp;
  }

  getHttpHeaderOptionToken(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return httpOptions;
  }

  getResource(): string {
    return this.baseResource;
  }

  getHttpHeaderOptions(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return { headers: httpOptions.headers };
  }
}
