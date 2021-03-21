import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './modules/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { ProgressComponent } from './components/progress/progress.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ButtonComponent, ProgressComponent],
  imports: [AngularMaterialModule, ReactiveFormsModule, RouterModule],
  exports: [
    AngularMaterialModule,
    ReactiveFormsModule,
    ButtonComponent,
    ProgressComponent,
  ],
})
export class SharedModule {}
