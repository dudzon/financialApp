import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  OnChanges,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { InputComponent } from './../components/input/input.component';
import { SelectComponent } from './../components/select/select.component';
import { CheckboxComponent } from './../components/checkbox/checkbox.component';
import { DatepickerComponent } from './../components/datepicker/datepicker.component';
import { TextareaComponent } from './../components/textarea/textarea.component';
import { ButtonComponent } from './../components/button/button.component';
import { FormComponent } from '../models/form-component';

@Directive({
  selector: '[appAddComponent]',
})
export class AddComponentDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
  // export class AddComponentDirective implements OnInit, OnChanges {
  // @Input()
  // config!: any;
  // @Input()
  // group!: FormGroup;
  // addComponent!: AddComponentDirective;
  // component!: ComponentRef<FormComponent>;
  // constructor(
  //   public viewContainerRef: ViewContainerRef,
  //   private resolver: ComponentFactoryResolver
  // ) {}
  // ngOnInit(): void {
  //   console.log(this.config, 'config from directive');
  //   this.loadComponent();
  //   this.component.instance.config = this.config;
  //   this.component.instance.group = this.group;
  // }
  // ngOnChanges(): void {
  //   if (this.component) {
  //     this.component.instance.config = this.config;
  //     this.component.instance.group = this.group;
  //   }
  // }
  // chooseComponent(field: any): any {
  //   let component;
  //   switch (field.type) {
  //     case 'input':
  //       return (component = InputComponent);
  //     case 'select':
  //       return (component = SelectComponent);
  //     case 'checkbox':
  //       return (component = CheckboxComponent);
  //     case 'datepicker':
  //       return (component = DatepickerComponent);
  //     case 'textarea':
  //       return (component = TextareaComponent);
  //     case 'button':
  //       return (component = ButtonComponent);
  //     default:
  //       throw new Error('No Component Found!');
  //   }
  // }
  // loadComponent(): void {
  //   const component = this.chooseComponent(this.config);
  //   // const ngControl = this.injector.get(NgControl);
  //   const componentFactory = this.resolver.resolveComponentFactory<FormComponent>(
  //     // this.chooseComponent(this.field)
  //     component
  //   );
  //   const viewContainerRef = this.addComponent.viewContainerRef;
  //   viewContainerRef.clear();
  //   const componentRef = viewContainerRef.createComponent<FormComponent>(
  //     componentFactory
  //   );
  //   // ngControl.valueAccessor = componentRef.instance;
  //   // componentRef.instance.data = component.data;
  //   // componentRef.instance.field = component.field;
  // }
}
