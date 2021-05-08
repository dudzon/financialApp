import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Autounsubscribe } from '@app/wizard/classes/autounsubscribe';
import { FormComponent } from '@app/wizard/models/form-component';
import { Routes } from '@app/wizard/models/routes';
import { ConfigService } from '@app/wizard/services/config.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent
  extends Autounsubscribe
  implements OnInit, FormComponent {
  @Input() field!: any;
  route!: string | null;
  constructor(private router: Router, private configSrv: ConfigService) {
    super();
    this.configSrv.getId$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((route: string | null) => (this.route = route));
  }
  ngOnInit(): void {}

  onBack(event: Event): void {
    event.preventDefault();
    this.goToPreviousRoute(this.route as string);
  }

  onAction(buttonAction: string, event: Event): void {
    if (!buttonAction) {
      return;
    }

    switch (buttonAction) {
      case 'back':
        this.onBack(event);
        break;
      default:
        throw new Error('No action found for button');
    }
  }

  goToPreviousRoute(route: string): void {
    switch (route) {
      case Routes.step2:
        this.router.navigate([Routes.step1]);
        break;
      case Routes.step3:
        this.router.navigate([Routes.step2]);
        break;
      case Routes.step4:
        this.router.navigate([Routes.step3]);
        break;
    }
  }
}
