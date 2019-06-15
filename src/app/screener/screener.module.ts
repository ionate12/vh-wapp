import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {AddScreenerComponent} from './add-screener.component';
import {ScreenerComponent} from './screener.component';
import {MatButtonModule, MatFormFieldModule, MatStepperModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ScreenerComponent,
    AddScreenerComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild([
      {path: 'screener', component: ScreenerComponent},
      {path: 'screener/new', component: AddScreenerComponent}
    ]),
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ], exports: [
    RouterModule, CommonModule
  ]
})
export class ScreenerModule { }
