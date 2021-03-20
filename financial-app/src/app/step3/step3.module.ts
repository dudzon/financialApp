import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { Step3Component } from './components/smart/step3/step3.component';
import { Step3RoutingModule } from './step3-routing.module';

@NgModule({
  declarations: [Step3Component],
  imports: [CommonModule, SharedModule, Step3RoutingModule],
})
export class Step3Module {}
