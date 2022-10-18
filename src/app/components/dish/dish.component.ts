import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDishesService } from 'src/app/get-dishes.service';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {

  constructor(private httpService: GetDishesService, private route: ActivatedRoute) { }
  id: any;
  dish: any;
  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id')
    this.httpService.getDish(this.id).subscribe(data => {
      this.dish = data
    })
  }

}
//Il problema è che nei dati json l'id non parte da 0 : fixare bug scaricando fake data da internet ASSICUARNDOSI CHE L'ID PARTA DA 0
