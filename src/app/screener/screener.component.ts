import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ScreenerQProperty, ScreenerQResult} from './models/models';

@Component({
  selector: 'app-screener',
  templateUrl: './screener.component.html',
  styleUrls: ['./screener.component.css']
})
export class ScreenerComponent implements OnInit {
  screenerProfiles: string [];
  tableData: ScreenerQResult[];
  displayedColumns: string [];
  constructor(private route: Router) { }

  ngOnInit() {
    this.screenerProfiles = ['Profile 1', 'Profile 2', 'Profile 3'];
    this.displayedColumns.concat(['CompanyCode', 'Industry']);
    this.tableData = [{
      companyCode: 'AAA',
      industry: 'ABC',
      items: [{name: 'P/E', value: 0.55, id: '001', type: 'xyz'},
        {name: 'UUSC', value: 12.32, id: '002', type: 'xyz'}
        ]
    }]
    this.tableData[0].items.forEach(value => {
      this.displayedColumns.concat(value.name);
    });
  }

  onCreateButtonClicked(event) {
    this.route.navigate(['screener/new']);
  }

}
