import {NgModule} from '@angular/core';
import {ContributionComponent} from './contribution/contribution.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
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
