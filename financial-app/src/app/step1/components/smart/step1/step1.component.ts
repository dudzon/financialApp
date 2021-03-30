import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { takeUntil } from 'rxjs/operators';

import { Autounsubscribe } from '@app/shared/classes/autounsubscribe';
import { ButtonColors } from '@app/shared/models/button-color';
import { DropdownOptions } from '@app/shared/models/dropdown-options';
import { progressWidth } from '@app/shared/models/progress-width';
import { Routes } from '@app/shared/models/routes';
import { ControlName } from '@app/step1/models/control-name';
import { Store } from '@ngrx/store';
import * as fromApp from '@app/store/app.reducer';
import * as fromStep1 from '@app/step1/store/step1.selectors';
import * as Step1Actions from '@app/step1/store/step1.actions';
import { Step1State } from '@app/step1/models/step1State';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css'],
})
export class Step1Component extends Autounsubscribe implements OnInit {
  step1Form!: FormGroup;
  ControlName = ControlName;
  creditPurposeOptions: DropdownOptions[] = [
    { text: 'Mortgage', value: 'Mortgage' },
    { text: 'Student Credit', value: 'Student Credit' },
    { text: 'Car Credit', value: 'Car Credit' },
  ];
  btnText = 'Determinate Credit Rate';
  public progressWidth = progressWidth.step1;
  public successBtnColor: ButtonColors = ButtonColors.primary;
  public isValid!: boolean;
  public selectCreditAmount!: number;
  public selectCreditDuration!: number;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {
    super();
  }

  ngOnInit(): void {
    this.store
      .select(fromStep1.selectCreditAmount)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (creditAmount: number) => (this.selectCreditAmount = creditAmount)
      );

    this.store
      .select(fromStep1.selectCreditDuration)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (creditDuration: number) => (this.selectCreditDuration = creditDuration)
      );

    this.step1Form = this.fb.group({
      [ControlName.creditPurpose]: ['', Validators.required],
      [ControlName.comments]: ['', Validators.required],
      [ControlName.loanAmount]: [this.selectCreditAmount, Validators.required],
      [ControlName.duration]: [this.selectCreditDuration, Validators.required],
    });
  }

  get creditPurpose(): FormControl {
    return this.step1Form.get(ControlName.creditPurpose) as FormControl;
  }

  get comments(): FormControl {
    return this.step1Form.get(ControlName.comments) as FormControl;
  }

  get loanAmount(): FormControl {
    return this.step1Form.get(ControlName.loanAmount) as FormControl;
  }

  get duration(): FormControl {
    return this.step1Form.get(ControlName.duration) as FormControl;
  }

  submitForm(): void {
    const updatedState: Step1State = {
      creditPurpose: this.step1Form.get(ControlName.creditPurpose)?.value,
      comments: this.step1Form.get(ControlName.comments)?.value,
      loanAmount: this.step1Form.get(ControlName.loanAmount)?.value,
      duration: this.step1Form.get(ControlName.duration)?.value,
    };
    if (this.step1Form.valid) {
      this.store.dispatch(Step1Actions.updateStore({ payload: updatedState }));

      this.router.navigate([Routes.step2]);
    }
  }
  getFormValidityStatus(): void {
    this.step1Form.statusChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((status) => (this.isValid = status));
  }
}
