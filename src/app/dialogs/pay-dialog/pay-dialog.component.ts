import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SendToApiService } from 'src/app/services/send-to-api.service';
import { AlertComponent } from 'src/app/snackBars/alert/alert.component';
import { PaymentSnackComponent } from 'src/app/snackBars/payment-snack/payment-snack.component';


@Component({
  selector: 'app-pay-dialog',
  templateUrl: './pay-dialog.component.html',
  styleUrls: ['./pay-dialog.component.css']
})
export class PayDialogComponent implements OnInit {
  response: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private alert: MatSnackBar, private sendToApi: SendToApiService) { }

  ngOnInit(): void {
  }
  openSnackBar(err?: any) {
    this.alert.openFromComponent(AlertComponent, {
      data: err,
      duration: 2 * 1000,
      panelClass: ['errSnackBar']
    });

  }
  openSnackBarOk() {
    this.alert.openFromComponent(PaymentSnackComponent, {
      duration: 2 * 1000,
      panelClass: ['succSnackBar']
    })
  }
  onPay() {
    this.sendToApi.payment(this.data).subscribe(data => {
      this.response = data
      if (this.response.status != "300") {
        this.openSnackBarOk()
      } else {
        this.openSnackBar(this.response.error)
      }
    })


    ///ON CLICK MODIFY WALLET CREDIT AND CREATE WAITING PAGE if all success, open succ snack else open Err snack
  }
}
