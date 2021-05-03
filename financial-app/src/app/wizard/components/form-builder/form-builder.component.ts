import { Component, Input, OnChanges, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Autounsubscribe } from '@app/wizard/classes/autounsubscribe';
import { ConfigService } from '@app/wizard/services/config.service';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
})
export class FormBuilderComponent
  extends Autounsubscribe
  implements OnInit, OnChanges, OnDestroy {
  @Input() template: any;
  @Input() id!: string | null;
  form!: FormGroup;
  route!: string | null;
  constructor(private configSrv: ConfigService) {
    super();
  }

  ngOnChanges(): void {
    this.form = new FormGroup({});
    this.getControls();
  }

  ngOnInit(): void {
    this.configSrv.getId$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((route: string | null) => (this.route = route));
    // console.log(this.template, 'template');
    // // this.form = new FormGroup({});
    // // this.filterButtons();
    // // // this.getControls();
    // // console.log(this.id, 'id');
    // console.log(this.form, 'form');
  }

  submitForm(): void {
    console.log(this.form, 'saved');
  }

  getControls(): void {
    const filtered = this.filterButtons();
    if (filtered) {
      filtered.forEach((item: any) =>
        this.form.addControl(item.field, new FormControl())
      );
    }
  }

  filterButtons(): any {
    if (this.template) {
      const filtered = this.template.filter(
        (item: any) => item.type !== 'button'
      );
      return filtered;
    }
  }

  getFormClass(route: string | null): string {
    switch (route) {
      case 'login':
        return 'form';
      case 'calc':
        return 'calcForm';
      default:
        return 'form';
    }
  }

  // showCustomTemplatePart(): string {
  //   return ` <div class="row">
  //                   <div class="col s2 push-s1">
  //                       <span class="texts__main">Monthly rate</span>
  //                   </div>
  //                   <div class="col s8 push-s1">
  //                       <p>
  //                           <!-- from <span>{{minRate$ | async}}</span><span>EUR</span> to
  //                           <span>{{maxRate$ | async}}</span><span>EUR</span> -->
  //                       </p>
  //                   </div>
  //               </div>
  //               <div class="row">
  //                   <div class="col s2 push-s1">
  //                       <span>Nominal interest</span>
  //                   </div>
  //                   <div class="col s8 push-s1">
  //                       <p>
  //                           from <span>5.67%</span> to <span>9.8%</span>
  //                       </p>
  //                   </div>
  //               </div>
  //         `;
  // }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
