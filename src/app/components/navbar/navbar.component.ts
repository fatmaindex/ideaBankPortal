import { Component } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isUserloged: boolean = false;
  constructor(private AuthService: AuthService, private router: Router, private snackBar: MatSnackBar) {
    // Subscribe to the login status Observable from AuthService to dynamically update the isUserloged variable
    this.AuthService.getLoggedStaus().subscribe((status) => {
      this.isUserloged = status;
    })
  }
  ngOnInit(): void {
    // On component initialization, check if the user is logged in by accessing the AuthService
    this.isUserloged = this.AuthService.isUserLoged;
  }
  // Method to handle user logout
  logout() {
    this.AuthService.logout()
    this.router.navigate(['/login']);
  }
}
