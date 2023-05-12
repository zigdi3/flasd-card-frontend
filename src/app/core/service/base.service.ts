import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { HeaderVO } from '../vo/header.vo';
import { environment } from 'src/environments/environment';
import { BasicService } from './basic.service';

export interface BaseCRUDService {
  all(data?: any): Observable<any>;
  get(id: string): Observable<any>;
  save(item: any): Observable<any>;
  remove(item: any): Observable<any>;
  patch(item: any): Observable<any>;
  post(item: any): Observable<any>;
  put(item: any): Observable<any>;
}
export class BaseService extends BasicService implements BaseCRUDService {
  constructor(resource: string, http: HttpClient, header: HeaderVO) {
    super(resource, http, header);
  }

  all(data?: any, path?: string, baseUrl?: string, noOptions?: boolean, bearer?: string): Observable<any> {
    // const options = !bearer ? this.getHttpHeaderOptionToken() : this.getHttpHeaderOptionBearer(bearer);
    if (data) {
      //  options.params = new HttpParams();
      Object.keys(data).forEach(key => {
        if (data[key] || typeof data[key] === 'boolean' || typeof data[key] === 'number') {
          //    options.params = options.params.set(key, data[key]);
        }
      });
    }
    baseUrl = baseUrl ? baseUrl : environment.baseUrl;
    return noOptions ? this.getHttp().get<any>(`${this.getUrlContext(path, baseUrl)}`) :
      this.getHttp().get<any>(`${this.getUrlContext(path, baseUrl)}`,);
  }

  get(id: any, path?: string, data?: any, baseUrl?: string): Observable<any> {
    const options = this.getHttpHeaderOptionToken();
    if (data) {
      options.params = new HttpParams();
      Object.keys(data).forEach(key => {
        if (data[key]) {
          options.params = options.params.set(key, data[key]);
        }
      });
    }

    baseUrl = baseUrl ? baseUrl : environment.baseUrl;
    return this.getHttp().get<any>(`${this.getUrlContext(path, baseUrl)}/${id}`, options);
  }

  save(item: any): Observable<any> {
    const options = this.getHttpHeaderOptionToken();
    options.params = new HttpParams();
    if (item._id) {
      return this.getHttp().put<any>(`${this.getUrlContext()}/${item._id}`, item, options);
    }
    return this.getHttp().post<any>(this.getUrlContext(), item, options);
  }

  remove(param: any, baseUrl?: string, path?: string): Observable<any> {
    const options = this.getHttpHeaderOptionToken();
    options.params = new HttpParams();
    baseUrl = baseUrl ? baseUrl : environment.baseUrl;
    if (param.id) {
      return this.getHttp().delete<any>(`${this.getUrlContext(undefined, baseUrl)}/${param.id}`, options);
    }
    if (param) {
      options.params = new HttpParams();
      this.getObjectKeys(param, options);
    }
    return this.getHttp().delete<any>(`${this.getUrlContext(path, baseUrl)}`, options);
  }

  getObjectKeys(param: any, options: any) {
    Object.keys(param).forEach(key => {
      if (param[key]) {
        options.params = options.params.set(key, param[key]);
      }
    });
  }

  removeById(id: number, param?: any): Observable<any> {
    const options = this.getHttpHeaderOptionToken();
    options.params = new HttpParams();

    if (param) {
      options.params = new HttpParams();
      this.getObjectKeys(param, options);
    }

    return this.getHttp().delete<any>(`${this.getUrlContext()}/${id}`, options);
  }

  patch(item: any, path?: string): Observable<any> {
    const options = this.getHttpHeaderOptionToken();
    options.params = new HttpParams();

    return this.getHttp().patch<any>(this.getUrlContext(path), item, options);
  }

  patchWithId(id: any, item: any): Observable<any> {
    const options = this.getHttpHeaderOptionToken();
    options.params = new HttpParams();

    return this.getHttp().patch<any>(`${this.getUrlContext()}/${id}`, item, options);
  }

  post(item: any, path?: string, params?: any, baseUrl?: string): Observable<any> {
    const options = this.getHttpHeaderOptionToken();
    options.params = new HttpParams();

    if (params) {
      options.params = new HttpParams();
      this.getObjectKeys(params, options);
    }

    baseUrl = baseUrl ? baseUrl : environment.baseUrl;
    return this.getHttp().post<any>(this.getUrlContext(path, baseUrl), item, options);
  }


  put(item: any, path?: string, params?: any): Observable<any> {
    const options = this.getHttpHeaderOptionToken();
    options.params = new HttpParams();

    if (params) {
      options.params = new HttpParams();
      this.getObjectKeys(params, options);
    }

    return this.getHttp().put<any>(this.getUrlContext(path), item, options);
  }

  getBlob(url: string): Observable<Blob> {
    const headers = this.getHttpHeaderOptionToken().headers;

    const options = {
      headers: headers,
      responseType: 'blob' as 'json'
    };

    return this.getHttp().get<Blob>(url, options);
  }

}
