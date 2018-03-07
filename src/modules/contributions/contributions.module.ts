import {NgModule} from '@angular/core';
import {ContributionComponent} from './contribution/contribution.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ContributionComponent
  ],
  exports: [
    ContributionComponent
  ]
})
export class ContributionsModule {

}
