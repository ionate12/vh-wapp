import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ScreenerDetail, ScreenerProfile} from '../models/models';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {ScreenerService} from '../../services/screener.service';
import {ResponseEnv} from '../../services/models/service.model';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-profile-table',
  templateUrl: './profile-table.component.html',
  styleUrls: ['./profile-table.component.scss']
})
export class ProfileTableComponent implements OnInit, OnChanges {
  @Input() activeProfile: ScreenerProfile;
  // currentUseProfile: Subject<ScreenerProfile>;
  public currentUseProfile: ScreenerProfile;
  displayedColumns: string[] = ['no', 'Screener Name', 'Description', ''];
  constructor(private service: ScreenerService) {
  }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
      for (const property in changes) {
          if (property === 'activeProfile') {
            this.loadScreenerDetail();
          }
      }
  }

  private loadScreenerDetail(): void {
    this.service.getScreenerDetails(this.activeProfile.screenerId).subscribe(
      (rs: HttpResponse<ResponseEnv>) => this.appendScreenerDetail(rs.body),
      (err: HttpErrorResponse) => console.log(err.message));
  }

  private appendScreenerDetail(data: ResponseEnv) {
    if (data.success) {
      // load data
      this.currentUseProfile = data.result;
      console.log(data);
    }
  }
}
