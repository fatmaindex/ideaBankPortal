import { Component } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private UserService: UserService, private router: Router) { }
  id: string = ''
  name: string = ''
  email: string = ''
  phone: string = ''

  onSubmitUser() {
    // create a new user
    let newUser = new User(this.id, this.name, this.email, this.phone)
    this.UserService.getUser(newUser).subscribe((response) => {
      if (response.length > 0) {
        //Login successful
        alert("login successful")
        this.UserService.setUserName(newUser.name)
        this.router.navigate(['/landing']);
      }
      else {
        // Login failed
        alert("login failed")

      }
    }

    )
  }
}
