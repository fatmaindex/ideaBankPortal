import { Component } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  name: string = '';
  password: string = '';

  constructor(
    private userService: UserService,
    private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) { }
  private showSnackbar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['custom-snackbar']
    });
  }
  onSubmitUser() {
    const regex = /^[A-Za-z]+$/;

    if (!this.name && !this.password) {
      this.showSnackbar('Username and password are required!');
      return;
    } else if (!this.name) {
      this.showSnackbar('Username is required!');
      return;
    } else if (!this.password) {
      this.showSnackbar('Password is required!');
      return;
    } else if (!regex.test(this.name)) {
      this.showSnackbar('Username can only contain letters.');
      return;
    }

    // Create a new user 
    let newUser = new User(this.name, this.password);

    // API call to check the user credentials
    this.userService.checkUserName(this.name).subscribe(response => {
      if (response.length > 0) {
        this.userService.checkUserLogeed(newUser).subscribe(response => {
          if (response.length > 0) {
            // Login successful
            this.userService.setUserName(newUser.name);
            const token = '123456789';
            this.authService.login(token);
            this.router.navigate(['/landing']);
          }
          else {
            this.showSnackbar('invalid password!');
          }
        })
      }
      else {
        this.showSnackbar('username is invalid!');
      }
    })
  }
}
