import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonColors } from '@app/shared/models/button-color';
import { ButtonType } from '@app/shared/models/button-type';
import { DropdownOptions } from '@app/shared/models/dropdown-options';
import { progressWidth } from '@app/shared/models/progress-width';
import { Routes } from '@app/shared/models/routes';
import { ControlName } from '@app/step4/models/control-name';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css'],
})
export class Step4Component implements OnInit {
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

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.step4Form = this.fb.group({
      [ControlName.dateOfBirth]: [''],
      [ControlName.nationality]: [''],
      [ControlName.residence]: [''],
      [ControlName.residentPeriod]: [''],
    });
  }

  submitForm(): void {
    console.log(this.step4Form);
  }

  onBack(event: Event): void {
    event.preventDefault();
    this.router.navigate([Routes.step3]);
  }
}
