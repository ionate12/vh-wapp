import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TwoWaySliderComponent} from './sliders/two-way-slider/two-way-slider.component';
import {IgxSliderModule} from 'igniteui-angular';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [TwoWaySliderComponent],
  imports: [
    CommonModule,
    IgxSliderModule,
    FormsModule
  ], exports: [
    TwoWaySliderComponent,
    CommonModule,
    FormsModule,
    IgxSliderModule
  ]
})
export class SharedModule { }
