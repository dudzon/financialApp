import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './modules/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { ProgressComponent } from './components/progress/progress.component';
import { RouterModule } from '@angular/router';
import { NotificationComponent } from './components/notification/notification.component';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [ButtonComponent, ProgressComponent, NotificationComponent],
  imports: [AngularMaterialModule, ReactiveFormsModule, RouterModule],
  exports: [
    AngularMaterialModule,
    ReactiveFormsModule,
    ButtonComponent,
    ProgressComponent,
    NotificationComponent,
  ],
  providers: [AuthGuard],
})
export class SharedModule {}
