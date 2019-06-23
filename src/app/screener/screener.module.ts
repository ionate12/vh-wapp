import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {AddScreenerComponent} from './add-screener.component';
import {ScreenerComponent} from './screener.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatListModule, MatStepperModule, MatTableModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import { ProfileTableComponent } from './profile-table/profile-table.component';

@NgModule({
  declarations: [
    ScreenerComponent,
    AddScreenerComponent,
    ProfileTableComponent
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
    ReactiveFormsModule,
    MatListModule,
    MatCardModule,
    MatTableModule
  ], exports: [
    RouterModule, CommonModule
  ]
})
export class ScreenerModule {

}
