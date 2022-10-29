import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private auth: AuthService) { }
  user: any;
  ngOnInit(): void {
    this.user = this.auth.user
  }
  onLogOut() {
    this.auth.logOut()
    window.location.reload()
  }
}
