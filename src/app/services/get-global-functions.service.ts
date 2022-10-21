import { AnimateTimings } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetCartService } from './get-cart.service';

@Injectable({
  providedIn: 'root'
})
export class GetGlobalFunctionsService {

  constructor(private service: GetCartService, private http: HttpClient) { }
  result: any;
  newItem: any;
  addDishToCart(data: any, quantity: number, cart: any) {
    this.newItem = { "id": cart[0].dishes.length, "dish": data.dish, "quantity": quantity }
    console.log(this.newItem)
    console.log(cart)
    cart[0].dishes.push(this.newItem)
    console.log(cart)
    return this.newItem
    // this.cart = this.cart[0].dishes
  }

  sendNewItemToApi(newItem: {}) {
    console.log(newItem)
    return this.http.post('/api/upload/cartItem', newItem).subscribe(data => {
      console.log(data + "data");

    })
  }
}
