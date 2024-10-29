import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroments/environment';
import { BehaviorSubject, Observable, } from 'rxjs';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserNameSubject = new BehaviorSubject<string | null>(null);
  currentUserName$ = this.currentUserNameSubject.asObservable()

  constructor(private Http: HttpClient) { }
  setUserName(name: string) {
    this.currentUserNameSubject.next(name);
  }
  // Method to check if user logged
  checkUserLogeed(newUser: User): Observable<any[]> {
    return this.Http.get<any>(`${environment.userUrl}?name=${newUser.name}&password=${newUser.password}`)
  }
  checkUserName(useName: string): Observable<any[]> {
    return this.Http.get<any>(`${environment.userUrl}?name=${useName}`)
  }
}
