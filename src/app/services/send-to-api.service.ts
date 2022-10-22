import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendToApiService {

  constructor(private http: HttpClient) { }
  sendNewItemToApi(newItem: {}) {
    return this.http.post('/api/upload/cartItem', newItem).subscribe(data => {
    })
  }
  deleteDish(newCart: any) {
    return this.http.put('/api/cart/removeItem', newCart).subscribe(data => {

    })
  }
  modifyQuantity(dish: any, quantity: number) {

    dish.quantity = quantity

    return this.http.patch('/api/cart/changeQuantity', dish).subscribe(data => {

    })
  }
}
