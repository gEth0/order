import { AnimateTimings } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetCartService } from './get-cart.service';


@Injectable({
  providedIn: 'root'
})
export class GetGlobalFunctionsService {

  constructor(private http: HttpClient) { }
  dishToDelete: any;
  newItem: any;
  indexDish: any;
  addDishToCart(data: any, quantity: number, id: any, cart: any) {

    this.newItem = { "id": id, "dish": data.dish, "quantity": quantity, "price": data.price }
    cart[1].totalPrice = (parseFloat(data.price.replace('$', '')) * quantity).toFixed(2)



    return [this.newItem, cart[1].totalPrice]
  }
  removeDishToCart(cart: any, id: any) {

    this.dishToDelete = cart[0].dishes.find((val: any) => val.id == id)

    this.indexDish = cart[0].dishes.findIndex((el: any) => { return el.id == this.dishToDelete.id })

    cart[0].dishes.splice(this.indexDish, 1)
    console.log(this.dishToDelete.price)
    var newPrice = parseFloat(this.dishToDelete.price.replace("$", "")) * this.dishToDelete.quantity
    newPrice = parseFloat(newPrice.toFixed(2))
    return [cart, newPrice]

  }



}
