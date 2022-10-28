import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PayDialogComponent } from 'src/app/dialogs/pay-dialog/pay-dialog.component';
import { GetCartService } from 'src/app/services/get-cart.service';
import { GetDishesService } from 'src/app/services/get-dishes.service';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {

  constructor(private service: GetDishesService, private getCart: GetCartService, public dialog: MatDialog) { }
  dishes: any;
  cart: any
  dialogResult: any
  ngOnInit(): void {
    this.service.getDishes().subscribe(data => {
      this.dishes = data
    })
    this.getCart.getCart().subscribe(data => {
      this.cart = data
    })
  }
  onClick() {
    const dialogRef = this.dialog.open(PayDialogComponent, {
      data: this.cart[1]
    });
    dialogRef.afterClosed().subscribe(data => {
      this.dialogResult = data
    })
  }
  displayedColumns = ['Name', "Quantity", "Price"]

}
