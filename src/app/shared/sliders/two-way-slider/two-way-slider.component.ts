import { Component, OnInit } from '@angular/core';
import {SliderType} from 'igniteui-angular';

@Component({
  selector: 'app-two-way-slider',
  templateUrl: './two-way-slider.component.html',
  styleUrls: ['./two-way-slider.component.scss']
})
export class TwoWaySliderComponent implements OnInit {
  public sliderType = SliderType;
  public priceRange: ValueRange = new ValueRange(200, 800 );
  constructor() { }
  ngOnInit() {
  }

}

export class ValueRange {
  constructor(public lower: number, public upper: number) {}
}
