import { Component, OnInit } from '@angular/core';
import { GetDishesService } from 'src/app/get-dishes.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private httpService: GetDishesService) { }
  dishes: any;
  ngOnInit(): void {

    this.httpService.getDishes().subscribe(data => {
      this.dishes = data
    })
  }

}
