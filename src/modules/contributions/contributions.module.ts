import {NgModule} from '@angular/core';
import {ContributionComponent} from './contribution/contribution.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
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
