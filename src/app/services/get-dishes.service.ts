import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDishesService {

  constructor(private http: HttpClient) { }
  getDishes() {
    return this.http.get('/api/dishes')
  }
  getDish(id: string) {
    return this.http.get('/api/dishes/' + id)
  }

}
