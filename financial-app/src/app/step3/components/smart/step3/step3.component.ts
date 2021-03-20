import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ButtonColors } from '@app/shared/models/button-color';
import { ButtonType } from '@app/shared/models/button-type';
import { DropdownOptions } from '@app/shared/models/dropdown-options';
import { ControlName } from '@app/step3/models/control-name';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css'],
})
export class Step3Component implements OnInit {
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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.step3Form = this.fb.group({
      [ControlName.applicantTitle]: [''],
      [ControlName.applicantFirstName]: [''],
      [ControlName.applicantLastName]: [''],
      [ControlName.partnerTitle]: [''],
      [ControlName.partnerFirstName]: [''],
      [ControlName.partnerLastName]: [''],
    });
  }

  submitForm(): void {
    console.log(this.step3Form);
  }
}
