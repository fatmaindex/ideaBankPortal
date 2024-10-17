import { Component } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private UserService: UserService, private router: Router, private AuthService:AuthService) { }
  id: string = ''
  name: string = ''
  email: string = ''
  phone: string = ''

  onSubmitUser() {
    if (!this.name || !this.email || !this.phone) {
      alert("All fields are required");
      return; 
    }

    // create a new user
    let newUser = new User(this.id, this.name, this.email, this.phone)
    this.UserService.getUser(newUser).subscribe((response) => {
      if (response.length > 0) {
        //Login successful
        alert("login successful")
        this.UserService.setUserName(newUser.name)
        const token = '123456789'; 
        this.AuthService.login(token)
        this.router.navigate(['/landing']);
      }
      else {
        alert("login failed")

      }
    }

    )
  }
}
