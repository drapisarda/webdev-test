import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'dr-contribution',
  templateUrl: './contribution.component.html',
  styleUrls: ['contribution.component.scss'],
})

export class ContributionComponent implements OnInit{
  isValid = false;
  showMoreTitleCta = '... show more';
  titleClassOpen = '';
  titleClassEdit = '';
  contributionEditorClass = '';

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


  ngOnInit(): void {
    if (!!this.id && !!this.targetDate) {
      this.isValid = true;
    }
  }

  toggleShowMoreTitle(): void {
    if (this.titleClassOpen === '') {
      this.showMoreTitleCta = 'show less';
      this.titleClassOpen = 'contribution__recap__title--open';
      return;
    }

    this.showMoreTitleCta = '... show more';
    this.titleClassOpen = '';
  }

  toggleEditTitle(): void {
    if (this.titleClassEdit === '') {
      this.titleClassEdit = 'contribution__recap--title-edit';
      return;
    }

    this.titleClassEdit = '';
  }

  toggleContributionEditor(): void {
    if (this.contributionEditorClass === '') {
      this.contributionEditorClass = 'contribution--edit';
      return;
    }

    this.contributionEditorClass = '';
  }

}
