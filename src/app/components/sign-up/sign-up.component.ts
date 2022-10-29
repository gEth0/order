import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { from } from 'rxjs';
import { SendToApiService } from 'src/app/services/send-to-api.service';
import { ErrSnackComponent } from 'src/app/snackBars/err-snack/err-snack.component';
import { SuccRegComponent } from 'src/app/snackBars/succ-reg/succ-reg.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private sendToApi: SendToApiService, private alert: MatSnackBar) { }
  response: any
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
    this.alert.openFromComponent(SuccRegComponent, {
      panelClass: ['succSnackBar'],
      duration: 2 * 1000
    }
    )
  }
  onSignUp(form: any) {
    this.sendToApi.register(form.value.email, form.value.password).subscribe(data => {
      this.response = data
      form.reset()
      if (this.response.status) {

        this.openSnackErr(this.response.error)
      } else {

        this.openSnackSucc()
      }
    })
  }
}
