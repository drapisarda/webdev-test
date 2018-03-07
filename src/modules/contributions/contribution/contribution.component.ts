import {Component, Input} from '@angular/core';

@Component({
  selector: 'dr-contribution',
  templateUrl: './contribution.component.html',
  styleUrls: ['contribution.component.scss'],
})

export class ContributionComponent {
  maxTitleChars = 120;

  @Input()
  id: number;

  @Input()
  title: string;

  @Input()
  creationDate: string;

  @Input()
  targetDate: string;

  @Input()
  status: string;

  @Input()
  progress: number;

  getProgress(): number {
    if (this.progress <= 0) {
      return 0;
    }

    if (this.progress >= 100) {
      return 100;
    }

    return this.progress;
  }


}
