import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-screener',
  templateUrl: './screener.component.html',
  styleUrls: ['./screener.component.css']
})
export class ScreenerComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  onCreateButtonClicked(event) {
    this.route.navigate(['screener/new']);
  }

}
