import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonColors } from '@app/shared/models/button-color';
import { ButtonType } from '@app/shared/models/button-type';
import { DropdownOptions } from '@app/shared/models/dropdown-options';
import { progressWidth } from '@app/shared/models/progress-width';
import { Routes } from '@app/shared/models/routes';
import { ControlName } from '@app/step2/models/control-name';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css'],
})
export class Step2Component implements OnInit {
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

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.step2Form = this.fb.group({
      [ControlName.applicant]: [''],
      [ControlName.maritalStatus]: [''],
      [ControlName.sameHouseholdStatus]: [''],
    });
  }

  submitForm(): void {
    console.log(this.step2Form);
    this.router.navigate([Routes.step3]);
  }

  onBack(event: Event): void {
    event.preventDefault();
    this.router.navigate([Routes.step1]);
  }
}
