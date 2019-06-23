import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Constants} from '../../utils/constants';

@Injectable()
export class MainInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request || !request.url || (/^http/.test(request.url) && !(Constants.API_URL && request.url.startsWith(Constants.API_URL)))) {
      return next.handle(request);
    }
    // This is to implement the get auth cookie from parent domain.
    const token = localStorage.getItem('token');
    if (!!token) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      });
    }
    return next.handle(request);
  }
}
