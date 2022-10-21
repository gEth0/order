import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetProfileService {

  constructor(private http: HttpClient) { }
  getProfile() {
    return this.http.get('/api/profile')
  }
}
