import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDishesService } from 'src/app/get-dishes.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  constructor(private httpService: GetDishesService, private route: ActivatedRoute) { }
  dishes: any;
  isProfile: any;
  dish: any;
  id: any;
  ngOnInit(): void {

    this.httpService.getDishes().subscribe(data => {
      this.dishes = data
    })
    this.id = this.route.snapshot.paramMap.get('id')
    this.isProfile = !this.id ? false : true



  }

}
