import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'order';
  constructor(private auth: AuthService, private route: Router) { }
  ngOnInit() {
    if (localStorage.getItem('user')) {
      let user = JSON.parse(localStorage.getItem('user') || '{}')
      this.auth.createUser(user.email, user.id, user._token, user._expirationDate)
    } else {
      this.route.navigate(["/"])
    }
  }
}
