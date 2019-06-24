import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ScreenerProfile, ScreenerQProperty, ScreenerQResult} from './models/models';
import {ScreenerService} from '../services/screener.service';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {ResponseEnv} from '../services/models/service.model';

@Component({
  selector: 'app-screener',
  templateUrl: './screener.component.html',
  styleUrls: ['./screener.component.scss']
})
export class ScreenerComponent implements OnInit {
  activeProfile: ScreenerProfile;
  screenerProfiles: ScreenerProfile [];
  constructor(private route: Router, private service: ScreenerService) { }

  ngOnInit() {
    this.activeProfile = null;
    this.loadProfile();
  }

  loadProfile(): void {
    this.service.getScreeners().subscribe(
      (rs: HttpResponse<ResponseEnv>) => this.appendScreenerProfiles(rs.body),
      err => console.log(err.message));
  }
  protected appendScreenerProfiles(data: ResponseEnv): void {
    if (data.success) {
      this.screenerProfiles = data.result;
      console.log(data);
    }

  }
  onCreateButtonClicked(event) {
    this.route.navigate(['screener/new']);
  }
  onScreenerClicked(item: ScreenerProfile) {
    this.activeProfile = item;
  }

}
