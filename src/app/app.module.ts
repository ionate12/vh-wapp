import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// tslint:disable-next-line:max-line-length
import {
  MatCardModule,
  MatIconModule,
  MatTableModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatAutocompleteModule
} from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SampleTableComponent } from './sample-table/sample-table.component';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {ScreenerModule} from './screener/screener.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    SampleTableComponent,
    NavComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    //AppRoutingModule,
    ScreenerModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatAutocompleteModule,
    RouterModule.forRoot([{ path: 'main', component: SampleTableComponent},
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: '**', redirectTo: 'main', pathMatch: 'full' }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
