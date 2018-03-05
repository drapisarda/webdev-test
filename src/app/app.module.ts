import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ContributionsModule} from '../modules/contributions/contributions.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContributionsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
