import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';

import { Autounsubscribe } from '@app/shared/classes/autounsubscribe';
import { ButtonColors } from '@app/shared/models/button-color';
import { ButtonType } from '@app/shared/models/button-type';
import { DropdownOptions } from '@app/shared/models/dropdown-options';
import { progressWidth } from '@app/shared/models/progress-width';
import { Routes } from '@app/shared/models/routes';
import { ControlName } from '@app/step4/models/control-name';
import * as fromApp from '@app/store/app.reducer';
import * as Step4Actions from '@app/step4/store/step4.actions';
import { Step4State } from '@app/step4/models/step4State';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css'],
})
export class Step4Component
  extends Autounsubscribe
  implements OnInit, OnDestroy {
  public step4Form!: FormGroup;
  ControlName = ControlName;
  nationalityOptions: DropdownOptions[] = [
    { text: 'Poland', value: 'Poland' },
    { text: 'Germany', value: 'Germany' },
    { text: 'Czech Republic', value: 'Czech Republic' },
  ];
  public btnBackText = 'BACK';
  public btnText = 'NEXT';
  public successBtnColor: ButtonColors = ButtonColors.primary;
  public backBtnColor: ButtonColors = ButtonColors.secondary;
  public submitBtn!: ButtonType.submit;
  public classicBtn!: ButtonType.button;
  public progressWidth = progressWidth.step4;
  public isValid!: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {
    super();
  }

  ngOnInit(): void {
    this.step4Form = this.fb.group({
      [ControlName.dateOfBirth]: ['', Validators.required],
      [ControlName.nationality]: ['', Validators.required],
      [ControlName.residence]: ['', Validators.required],
      [ControlName.residentPeriod]: ['', Validators.required],
    });
  }

  get dateOfBirth(): FormControl {
    return this.step4Form.get(ControlName.dateOfBirth) as FormControl;
  }

  get nationality(): FormControl {
    return this.step4Form.get(ControlName.nationality) as FormControl;
  }

  get residence(): FormControl {
    return this.step4Form.get(ControlName.residence) as FormControl;
  }

  get residentPeriod(): FormControl {
    return this.step4Form.get(ControlName.residentPeriod) as FormControl;
  }

  submitForm(): void {
    console.log(this.step4Form);
    const updatedState: Step4State = {
      dateOfBirth: this.step4Form.get(ControlName.dateOfBirth)?.value,
      nationality: this.step4Form.get(ControlName.nationality)?.value,
      residence: this.step4Form.get(ControlName.residence)?.value,
      residentPeriod: this.step4Form.get(ControlName.residentPeriod)?.value,
    };

    if (this.step4Form.valid) {
      this.store.dispatch(Step4Actions.updateStore({ payload: updatedState }));
      console.log(this.store, 'store after step4');
    }
  }

  onBack(event: Event): void {
    event.preventDefault();
    this.router.navigate([Routes.step3]);
  }

  getFormValidityStatus(): void {
    this.step4Form.statusChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((status) => (this.isValid = status));
  }
  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
