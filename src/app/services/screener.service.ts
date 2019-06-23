import {Injectable, Type} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResponseEnv} from './models/service.model';
import {Constants} from '../utils/constants';

type EntityResponseType = HttpResponse<ResponseEnv>;

@Injectable({
  providedIn: 'root'
})
export class ScreenerService {
  baseurl = Constants.API_URL;


  constructor(protected http: HttpClient) { }

  getScreeners(): Observable<EntityResponseType> {
    return this.http.get<ResponseEnv>(this.baseurl + '/screener',  {observe: 'response'});
  }

  getScreenerDetails(screenerId: string): Observable<EntityResponseType> {
     const requestBody = { screenerId };
     const url = this.baseurl + '/screener/detail';
     return this.http.post<ResponseEnv>(url, requestBody, {observe: 'response'});
  }
}
