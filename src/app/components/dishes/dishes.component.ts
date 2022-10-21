import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { GetDishesService } from 'src/app/services/get-dishes.service';
import { OrderDialogComponent } from '../dialogs/order-dialog/order-dialog.component';


@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  constructor(private httpService: GetDishesService, private route: ActivatedRoute, public dialog: MatDialog) { }
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

