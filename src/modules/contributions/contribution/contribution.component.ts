import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'dr-contribution',
  templateUrl: './contribution.component.html',
  styleUrls: ['contribution.component.scss'],
})

export class ContributionComponent implements OnInit {
  isValid = false;
  showMoreTitleCta = '... show more';
  titleOpen = false;
  titleEdit = false;
  contributionEdit = false;
  dataPersisted = false;
  showFormAsValid = true;
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
    this.titleOpen = !this.titleOpen;

    if (this.titleOpen) {
      this.showMoreTitleCta = 'show less';
      return;
    }

    this.showMoreTitleCta = '... show more';
  }

  toggleEditTitle(): void {
    this.titleEdit = !this.titleEdit;
  }

  openContributionEdit(): void {
    if (! this.contributionEdit) {
      this.contributionEdit = true;
    }
  }

  closeContributionEdit(): void {
    if (this.contributionEdit) {
      this.contributionEdit = false;
    }
  }

  toggleContributionEditor(action?: boolean): void {
    if (!!action || ((undefined === action) && !this.contributionEdit)) {
      this.contributionEdit = true;
      return;
    }

    this.contributionEdit = false;
  }

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

  showFormErrors(): boolean {
    return !this.showFormAsValid || (this.form.touched && !this.form.valid);
  }

  onSubmit() {
    if (this.form.valid) {
      // todo: persist the data

      this.showFormAsValid = true;
      this.dataPersisted = true;
      return;
    }

    this.showFormAsValid = false;
    this.dataPersisted = false;
  }
}
