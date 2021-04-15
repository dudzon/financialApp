import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatRadioModule,
    MatNativeDateModule,
    MatSnackBarModule,
  ],
  exports: [
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatRadioModule,
    MatNativeDateModule,
    MatSnackBarModule,
  ],
})
export class MaterialModule {}
