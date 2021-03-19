import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './modules/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [AngularMaterialModule, ReactiveFormsModule],
  exports: [AngularMaterialModule, ReactiveFormsModule, ButtonComponent],
})
export class SharedModule {}
