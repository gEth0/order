import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
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

  newPrice: any;
  cart: any;
  newCart: any;
  quantity: any;
  total: any;
  priceToModify: any;
  ngOnInit(): void {
    this.service.getCart().subscribe((data: any) => {
      this.cart = data
      console.log(data)
    })

  }



  openSnackBar() {
    this.alert.openFromComponent(AlertComponent, {
      duration: 2 * 1000,
    });
  }

  onDeleteDish(dish: any) {
    [this.newCart, this.newPrice] = this.functions.removeDishToCart(this.cart, dish.id)
    console.log(this.newPrice)
    this.sendToApi.deleteDish(this.newCart, this.newPrice)
    window.location.reload()
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

        this.priceToModify = parseFloat(dish.price.replace("$", ""))
        this.newPrice = this.sendToApi.modifyQuantity(dish, this.quantity, this.priceToModify)
        window.location.reload()
      }
    })
    // window.location.reload()
  }
}
