import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { SendToApiService } from '../services/send-to-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private sendToApi: SendToApiService) { }
  user: any
  isLoggedInV !: boolean
  // login(email: any, password: any) {
  //   this.sendToApi.login(email, password)
  // }
  // register() {
  //   this.sendToApi.register("test@gmail.com", "test")
  // }
  createUser(email: string, id: string, token: string, expirationDate: Date) {
    this.user = new User(email, id, token, expirationDate)
  }
  isLoggedIn() {
    if (this.user.getToken == null) {
      this.isLoggedInV = false
    }
    this.isLoggedInV = true
    return this.isLoggedInV
  }
  logOut() {
    this.user = null
    localStorage.removeItem('user')
    this.isLoggedInV = false
  }
}
///CHIAMARLI DA QUA
