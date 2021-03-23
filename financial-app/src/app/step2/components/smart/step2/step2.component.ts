import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';

import { ButtonColors } from '@app/shared/models/button-color';
import { ButtonType } from '@app/shared/models/button-type';
import { DropdownOptions } from '@app/shared/models/dropdown-options';
import { progressWidth } from '@app/shared/models/progress-width';
import { Routes } from '@app/shared/models/routes';
import { ControlName } from '@app/step2/models/control-name';
import * as fromApp from '@app/store/app.reducer';
import * as Step2Actions from '@app/step2/store/step2.actions';
import { Step2State } from '@app/step2/models/step2State';

import { Autounsubscribe } from '@app/shared/classes/autounsubscribe';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css'],
})
export class Step2Component extends Autounsubscribe implements OnInit {
  public step2Form!: FormGroup;
  ControlName = ControlName;
  maritalOptions: DropdownOptions[] = [
    { text: 'Divorced', value: 'Divorced' },
    { text: 'Single', value: 'Single' },
    { text: 'Married', value: 'Married' },
  ];
  public btnBackText = 'BACK';
  public btnText = 'NEXT';
  public successBtnColor: ButtonColors = ButtonColors.primary;
  public backBtnColor: ButtonColors = ButtonColors.secondary;
  public submitBtn!: ButtonType.submit;
  public classicBtn!: ButtonType.button;
  public progressWidth = progressWidth.step2;
  public isValid!: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {
    super();
  }

  ngOnInit(): void {
    this.step2Form = this.fb.group({
      [ControlName.applicant]: ['', Validators.required],
      [ControlName.maritalStatus]: ['', Validators.required],
      [ControlName.sameHouseholdStatus]: ['', Validators.required],
    });
  }

  submitForm(): void {
    console.log(this.step2Form);
    const updatedState: Step2State = {
      applicant: this.step2Form.get(ControlName.applicant)?.value,
      maritalStatus: this.step2Form.get(ControlName.maritalStatus)?.value,
      sameHouseholdStatus: this.step2Form.get(ControlName.sameHouseholdStatus)
        ?.value,
    };
    if (this.step2Form.valid) {
      this.store.dispatch(Step2Actions.updateStore({ payload: updatedState }));
      this.router.navigate([Routes.step3]);
    }
  }

  onBack(event: Event): void {
    event.preventDefault();
    this.router.navigate([Routes.step1]);
  }

  getFormValidityStatus(): void {
    this.step2Form.statusChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((status) => (this.isValid = status));
  }
}
