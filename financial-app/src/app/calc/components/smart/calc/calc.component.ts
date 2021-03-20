import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ControlName } from '@app/calc/models/control-name';
import { ButtonColors } from '@app/shared/models/button-color';

const RATE = {
  minimumRate: 5.67,
  maximumRate: 9.8,
};

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css'],
})
export class CalcComponent implements OnInit {
  calcForm!: FormGroup;
  ControlName = ControlName;
  btnText = 'Apply Your Loan';
  public successBtnColor: ButtonColors = ButtonColors.primary;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.calcForm = this.fb.group({
      [ControlName.creditAmount]: [''],
      [ControlName.duration]: [''],
    });
  }

  submitForm(): void {
    console.log(this.calcForm);
  }
}
