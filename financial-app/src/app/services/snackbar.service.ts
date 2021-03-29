import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationComponent } from '@app/shared/components/notification/notification.component';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  error(message: string): void {
    this.snackBar.openFromComponent(NotificationComponent, {
      duration: 3000,
      data: { message },
      panelClass: ['mat-snackbar-error'],
    });
  }

  success(message: string): void {
    this.snackBar.openFromComponent(NotificationComponent, {
      duration: 3000,
      data: { message },
      panelClass: ['mat-snackbar-success'],
    });
  }
}
