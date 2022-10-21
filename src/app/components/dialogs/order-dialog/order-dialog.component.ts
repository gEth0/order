import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDishesService } from 'src/app/services/get-dishes.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { AnimateTimings } from '@angular/animations';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertComponent } from '../../alert/alert.component';
import { GetGlobalFunctionsService } from 'src/app/services/get-global-functions.service';
import { async } from '@angular/core/testing';
import { GetCartService } from 'src/app/services/get-cart.service';


@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.css']
})

export class OrderDialogComponent implements OnInit, OnDestroy {
  @Input() dish: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private alert: MatSnackBar, private functions: GetGlobalFunctionsService, private service: GetCartService) { }


  openSnackBar() {
    this.alert.openFromComponent(AlertComponent, {
      duration: 2 * 1000,
    });
  }

  quantity: any;
  id: any;
  cart: any;
  newItem: any;
  ngOnInit(): void {
    this.service.getCart().subscribe(data => {
      this.cart = data
    })
    this.quantity = 1;
  }
  ngOnDestroy(): void {
    this.service.getCart().subscribe(data => {
      this.cart = data
    })
  }

  getValue() {
    if (this.quantity < 1 || this.quantity > 10) {
      this.openSnackBar()
    } else {
      console.log(this.cart)
      this.newItem = this.functions.addDishToCart(this.data, this.quantity, this.cart)
      this.functions.sendNewItemToApi(this.newItem)
    }
  }


}
