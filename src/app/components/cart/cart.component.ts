import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModifyDialogComponent } from 'src/app/dialogs/modify-dialog/modify-dialog.component';
import { GetCartService } from 'src/app/services/get-cart.service';
import { GetGlobalFunctionsService } from 'src/app/services/get-global-functions.service';
import { SendToApiService } from 'src/app/services/send-to-api.service';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private service: GetCartService, private functions: GetGlobalFunctionsService, private sendToApi: SendToApiService, public dialog: MatDialog, private alert: MatSnackBar) { }
  cart: any;
  newCart: any;
  quantity: any;
  ngOnInit(): void {
    this.service.getCart().subscribe((data: any) => {
      this.cart = data
    })

  }
  openSnackBar() {
    this.alert.openFromComponent(AlertComponent, {
      duration: 2 * 1000,
    });
  }
  onDeleteDish(dish: any) {
    this.newCart = this.functions.removeDishToCart(this.cart, dish.id)
    this.sendToApi.deleteDish(this.newCart)
  }
  onModifyQuantity(dish: any) {

    const dialogRef = this.dialog.open(ModifyDialogComponent, {
      data: dish
    })
    dialogRef.afterClosed().subscribe(data => {
      this.quantity = data
      if (this.quantity > 10 || this.quantity < 1 || this.quantity == undefined) {
        this.openSnackBar()
      } else {
        this.sendToApi.modifyQuantity(dish, this.quantity)
      }
    })

  }
}
