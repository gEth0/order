import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendToApiService {

  constructor(private http: HttpClient) { }
  sendNewItemToApi(newItem: {}, priceToAdd: any) {
    return this.http.post('/api/upload/cartItem', { "newItem": newItem, "newPrice": priceToAdd }).subscribe(data => {
    })
  }
  deleteDish(newCart: any, newPrice: any) {
    return this.http.put('/api/cart/removeItem', { "newCart": newCart, "newPrice": newPrice }).subscribe(data => {

    })
  }
  modifyQuantity(dish: any, quantity: number, newDishPrice: any) {
    console.log(newDishPrice)
    dish.quantity = quantity

    return this.http.patch('/api/cart/changeQuantity', { "dish": dish, "newQuantity": dish.quantity, "newDishPrice": newDishPrice }).subscribe(data => {

    })
  }
  newPrice(newPrice: any) {
    return this.http.post('/api/update/cartPrice', newPrice).subscribe(data => {
    })
  }
  payment(charge: any) {
    return this.http.post('/api/wallet', charge)
  }
  addDishesToWaitList(dishes: any) {
    return this.http.post('/api/upload/waitList', dishes).subscribe(data => {

    })
  }
  login(email: string, password: string) {
    return this.http.post('/api/login', { email: email, password: password })
  }
  register(email: string, password: string) {
    return this.http.post('/api/register', { email: email, password: password })
  }
}
