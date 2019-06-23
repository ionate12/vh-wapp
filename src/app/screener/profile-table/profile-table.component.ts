import { Component, OnInit } from '@angular/core';

export interface ProfileViewModel {
  screenerName: string;
  no: number;
  description: string;
}



@Component({
  selector: 'app-profile-table',
  templateUrl: './profile-table.component.html',
  styleUrls: ['./profile-table.component.css']
})
export class ProfileTableComponent implements OnInit {

  displayedColumns: string[] = ['no', 'Screener Name', 'Description', ''];
  constructor() { }

  ngOnInit() {
  }

}
