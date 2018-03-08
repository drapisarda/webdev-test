import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'dr-contribution',
  templateUrl: './contribution.component.html',
  styleUrls: ['contribution.component.scss'],
})

// https://angular.io/guide/reactive-forms

export class ContributionComponent implements OnInit{
  isValid = false;
  showMoreTitleCta = '... show more';
  titleClassOpen = '';
  titleClassEdit = '';
  contributionEditorClass = '';
  form: FormGroup;

  @Input()
  id: number;

  @Input()
  title: string;

  @Input()
  description: string;

  @Input()
  creationDate: string;

  @Input()
  targetDate: string;

  @Input()
  status: string;

  @Input()
  progress: number;

  @Input()
  visibility: string;

  @Input()
  position: string;

  constructor(private _fb: FormBuilder) {
  }

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

    this._createForm();
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

  toggleContributionEditor(action?: boolean): void {
    if (!!action || ((undefined === action) && this.contributionEditorClass === '')) {
      this.contributionEditorClass = 'contribution--edit';
      return;
    }

    this.contributionEditorClass = '';
  }

  // https://angular.io/guide/reactive-forms
  _createForm(): void {
    this.form = this._fb.group({
      title: [this.title, Validators.required],
      description: [this.description, Validators.required],
      creationDate: [this.targetDate, Validators.required],
      targetDate: [this.targetDate, Validators.required],
      status: [this.status, Validators.required],
      progress: [this.progress, Validators.required],
      visibility: [this.visibility, Validators.required],
      position: [this.position, Validators.required],
    });
  }

  onSubmit() {
    console.log(this.form.valid);
  }
}
