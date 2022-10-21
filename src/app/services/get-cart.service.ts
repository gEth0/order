import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetCartService {

  constructor(private http: HttpClient) { }
  getCart() {
    return this.http.get('/api/profile/cart')
  }
}
