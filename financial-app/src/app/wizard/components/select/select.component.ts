import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormComponent } from '@app/wizard/models/form-component';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit, FormComponent {
  constructor() {}
  // @Input() config: any;
  @Input() data: any;
  @Input() field: any;
  config!: any;
  group!: FormGroup;
  ngOnInit(): void {}
}
