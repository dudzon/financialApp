import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ControlName } from '@app/calc/models/control-name';
import { ButtonColors } from '@app/shared/models/button-color';
import { Routes } from '@app/shared/models/routes';

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

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.calcForm = this.fb.group({
      [ControlName.creditAmount]: [''],
      [ControlName.duration]: [''],
    });
  }

  submitForm(): void {
    console.log(this.calcForm);
    this.router.navigate([Routes.step1]);
  }
}
