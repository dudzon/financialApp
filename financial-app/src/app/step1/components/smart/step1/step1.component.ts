import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonColors } from '@app/shared/models/button-color';
import { DropdownOptions } from '@app/shared/models/dropdown-options';
import { progressWidth } from '@app/shared/models/progress-width';
import { Routes } from '@app/shared/models/routes';
import { ControlName } from '@app/step1/models/control-name';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css'],
})
export class Step1Component implements OnInit {
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

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.step1Form = this.fb.group({
      [ControlName.creditPurpose]: [''],
      [ControlName.comments]: [''],
      [ControlName.loanAmount]: [''],
      [ControlName.duration]: [''],
    });
  }

  submitForm(): void {
    console.log(this.step1Form);
    this.router.navigate([Routes.step2]);
  }
}
