import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HeaderVO {

  private baseUrl: string = '';


  setBaseUrl(baseUrl: string | any): void {
    this.baseUrl = baseUrl;
  }

  getBaseUrl(): string {
    return this.baseUrl;
  }

}
