import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormComponent } from '@app/wizard/models/form-component';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'],
})
export class TextareaComponent implements OnInit, FormComponent {
  constructor() {}
  @Input() config: any;
  @Input() data: any;
  @Input() field: any;
  // config!: any;
  // group!: FormGroup;
  ngOnInit(): void {}
}
