import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BaseService } from './base.service';
import { HeaderVO } from '../vo/header.vo';

@Injectable({ providedIn: 'root' })
export class FlashCardService extends BaseService {
  constructor(
    private _http: HttpClient,
    private _header: HeaderVO
  ) {
    super('flash-card', _http, _header);
  }

}
