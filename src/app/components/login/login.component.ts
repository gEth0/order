import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/models/user.model';
import { SendToApiService } from 'src/app/services/send-to-api.service';
import { AlertComponent } from 'src/app/snackBars/alert/alert.component';
import { ErrSnackComponent } from 'src/app/snackBars/err-snack/err-snack.component';
import { SuccLoginComponent } from 'src/app/snackBars/succ-login/succ-login.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user!: User
  constructor(private sendToApi: SendToApiService, private alert: MatSnackBar, private auth: AuthService) { }
  response: any;
  ngOnInit(): void {
  }
  openSnackErr(data?: any) {
    this.alert.openFromComponent(ErrSnackComponent, {
      data: data,
      panelClass: ['errSnackBar'],
      duration: 2 * 1000
    }
    )
  }
  openSnackSucc() {
    this.alert.openFromComponent(SuccLoginComponent, {
      panelClass: ['succSnackBar'],
      duration: 2 * 1000
    }
    )
  }
  onLogin(form: any) {
    this.sendToApi.login(form.value.email, form.value.password).subscribe(data => {
      this.response = data
      form.reset()
      if (this.response.status) {
        this.openSnackErr(this.response.error)
      } else {
        const expirationDate = new Date(new Date().getTime() + this.response.expirationDate * 1000)
        this.auth.createUser(this.response.email, this.response.idToken, this.response.refreshToken, expirationDate)
        console.log(this.auth.user)
        localStorage.setItem('user', JSON.stringify(this.auth.user))
        this.openSnackSucc()
      }
      window.location.reload()
    })
  }
}
