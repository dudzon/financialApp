import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcComponent } from './components/smart/calc/calc.component';
import { SharedModule } from '@app/shared/shared.module';
import { CalcRoutingModule } from './calc-routing.module';

@NgModule({
  declarations: [CalcComponent],
  imports: [CommonModule, SharedModule, CalcRoutingModule],
})
export class CalcModule {}
