import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserLogedSubject: BehaviorSubject<boolean>;
  constructor() {
    this.isUserLogedSubject = new BehaviorSubject<boolean>(false)
  }


  get isUserLoged(): boolean {
    return (localStorage.getItem('authToken')) ? true : false
  }
  login(token: string): void {
    localStorage.setItem('authToken', token);
    this.isUserLogedSubject.next(true)
  }
  logout(): void {
    localStorage.removeItem('authToken');
    this.isUserLogedSubject.next(false)
  }
  getLoggedStaus() {
    return this.isUserLogedSubject;
  }
}
