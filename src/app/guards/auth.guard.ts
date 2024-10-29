import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) { }

  canActivate(): boolean {
    if (this.authService.isUserLoged) {
      return true;
    } else {
      this.snackBar.open('You must login first!', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['custom-snackbar']
      }); this.router.navigate(['/login']);
      return false;
    }
  }
}
