import { Component, Input, OnInit } from '@angular/core';
import { FormComponent } from '@app/wizard/models/form-component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit, FormComponent {
  constructor() {}

  @Input() field: any;

  ngOnInit(): void {}
}
