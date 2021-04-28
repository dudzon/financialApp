import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
})
export class FormBuilderComponent implements OnInit, OnChanges {
  @Input() template: any;
  @Input() id!: string | null;
  form!: FormGroup;
  constructor() {}

  ngOnChanges(): void {
    // console.log(this.template, 'template');
    // this.filterButtons();
    this.form = new FormGroup({});
    // this.filterButtons();
    this.getControls();
  }

  ngOnInit(): void {
    console.log(this.template, 'template');
    // this.form = new FormGroup({});
    // this.filterButtons();
    // // this.getControls();
    console.log(this.id, 'id');
    console.log(this.form, 'form');
  }

  submitForm(): void {
    console.log(this.form, 'saved');
  }

  getControls(): void {
    const filtered = this.filterButtons();

    filtered.forEach((item: any) =>
      this.form.addControl(item.field, new FormControl())
    );

    console.log(filtered, 'filtered');
  }

  filterButtons(): any {
    // console.log(this.template, 'template from filterbuttons');
    const filtered = this.template.filter(
      (item: any) => item.type !== 'button'
    );
    console.log(filtered, 'filterbuttons');
    return filtered;

    // const filtered = this.template.filter(
    //   (item: any) => item.type !== 'button'
    // );
    // console.log(filtered, 'filterbuttons');
    // return filtered;
  }
}
