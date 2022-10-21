import { Component, OnInit } from '@angular/core';
import { GetCartService } from 'src/app/services/get-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private service: GetCartService) { }
  cart: any;
  ngOnInit(): void {
    this.service.getCart().subscribe((data: any) => {
      this.cart = data
    })

  }

}
