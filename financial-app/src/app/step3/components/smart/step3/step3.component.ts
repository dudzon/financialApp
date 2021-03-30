import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';

import { ButtonColors } from '@app/shared/models/button-color';
import { ButtonType } from '@app/shared/models/button-type';
import { DropdownOptions } from '@app/shared/models/dropdown-options';
import { progressWidth } from '@app/shared/models/progress-width';
import { Routes } from '@app/shared/models/routes';
import { ControlName } from '@app/step3/models/control-name';
import * as fromApp from '@app/store/app.reducer';
import * as Step3Actions from '@app/step3/store/step3.actions';
import { Autounsubscribe } from '@app/shared/classes/autounsubscribe';
import { Step3State } from '@app/step3/models/step3State';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css'],
})
export class Step3Component extends Autounsubscribe implements OnInit {
  public step3Form!: FormGroup;
  ControlName = ControlName;
  titleOptions: DropdownOptions[] = [
    { text: 'Miss', value: 'Miss' },
    { text: 'Mister', value: 'Mister' },
    { text: 'No title', value: 'No title' },
  ];
  public btnBackText = 'BACK';
  public btnText = 'NEXT';
  public successBtnColor: ButtonColors = ButtonColors.primary;
  public backBtnColor: ButtonColors = ButtonColors.secondary;
  public submitBtn!: ButtonType.submit;
  public classicBtn!: ButtonType.button;
  public progressWidth = progressWidth.step3;
  public isValid!: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {
    super();
  }

  ngOnInit(): void {
    this.step3Form = this.fb.group({
      [ControlName.applicantTitle]: ['', Validators.required],
      [ControlName.applicantFirstName]: ['', Validators.required],
      [ControlName.applicantLastName]: ['', Validators.required],
      [ControlName.partnerTitle]: ['', Validators.required],
      [ControlName.partnerFirstName]: ['', Validators.required],
      [ControlName.partnerLastName]: ['', Validators.required],
    });
    console.log(this.store);
  }

  get applicantTitle(): FormControl {
    return this.step3Form.get(ControlName.applicantTitle) as FormControl;
  }

  get applicantFirstName(): FormControl {
    return this.step3Form.get(ControlName.applicantFirstName) as FormControl;
  }

  get applicantLastName(): FormControl {
    return this.step3Form.get(ControlName.applicantLastName) as FormControl;
  }

  get partnerTitle(): FormControl {
    return this.step3Form.get(ControlName.partnerTitle) as FormControl;
  }

  get partnerFirstName(): FormControl {
    return this.step3Form.get(ControlName.partnerFirstName) as FormControl;
  }

  get partnerLastName(): FormControl {
    return this.step3Form.get(ControlName.partnerLastName) as FormControl;
  }

  submitForm(): void {
    console.log(this.step3Form);
    const updatedState: Step3State = {
      applicantTitle: this.step3Form.get(ControlName.applicantTitle)?.value,
      applicantFirstName: this.step3Form.get(ControlName.applicantFirstName)
        ?.value,
      applicantLastName: this.step3Form.get(ControlName.applicantLastName)
        ?.value,
      partnerTitle: this.step3Form.get(ControlName.partnerTitle)?.value,
      partnerFirstName: this.step3Form.get(ControlName.partnerFirstName)?.value,
      partnerLastName: this.step3Form.get(ControlName.partnerLastName)?.value,
    };

    if (this.step3Form.valid) {
      this.store.dispatch(Step3Actions.updateStore({ payload: updatedState }));
      this.router.navigate([Routes.step4]);
    }
  }

  onBack(event: Event): void {
    event.preventDefault();
    this.router.navigate([Routes.step2]);
  }

  getFormValidityStatus(): void {
    this.step3Form.statusChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((status) => (this.isValid = status));
  }
}
