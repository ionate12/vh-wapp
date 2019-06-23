import {Injectable, Type} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResponseEnv} from './models/service.model';

@Injectable({
  providedIn: 'root'
})
export class ScreenerService {
  baseurl = 'http://api.valuehunter.vn';
  headers = new HttpHeaders({[]
  });
  constructor(protected http: HttpClient) { }

  getScreener(screenerId): Observable<ResponseEnv> {

    return this.http.get<ResponseEnv>(this.baseurl + '/screener',   )
  }
}
