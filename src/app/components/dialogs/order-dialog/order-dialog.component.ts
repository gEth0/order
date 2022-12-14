import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertComponent } from '../../../snackBars/alert/alert.component';
import { GetGlobalFunctionsService } from 'src/app/services/get-global-functions.service';
import { GetCartService } from 'src/app/services/get-cart.service';
import { SendToApiService } from 'src/app/services/send-to-api.service';


@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.css']
})

export class OrderDialogComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() dish: any;
  @ViewChild('id') idRef !: ElementRef;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private alert: MatSnackBar, private functions: GetGlobalFunctionsService, private service: GetCartService, private sendToApi: SendToApiService) { }



  openSnackBar() {
    this.alert.openFromComponent(AlertComponent, {
      duration: 2 * 1000,
    });
  }
  total: any;
  quantity: any;
  id: any;
  cart: any;
  newItem: any;
  newTotalPrice: any;
  ngOnInit(): void {
    this.service.getCart().subscribe(data => {
      this.cart = data
    })
    this.quantity = 1;
    this.total = parseFloat(this.data.price.replace('$', '')) * this.quantity

  }
  ngAfterViewInit(): void {
    this.idRef = this.idRef.nativeElement.value
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
      [this.newItem, this.newTotalPrice] = this.functions.addDishToCart(this.data, this.quantity, this.idRef, this.cart)
      console.log(this.newItem)
      console.log(this.newTotalPrice)
      this.sendToApi.sendNewItemToApi(this.newItem, this.newTotalPrice)

    }
  }
  onSlide(event: any) {
    this.quantity = event.value
    this.total = parseFloat(this.data.price.replace('$', '')) * this.quantity
  }

}
