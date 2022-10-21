import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { GetDishesService } from 'src/app/services/get-dishes.service';
import { OrderDialogComponent } from '../dialogs/order-dialog/order-dialog.component';


@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {

  constructor(private httpService: GetDishesService, private route: ActivatedRoute, public dialog: MatDialog) { }
  id: any;
  dish: any;
  dialogRef: any;

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id')
    this.httpService.getDish(this.id).subscribe(data => {
      this.dish = data
    })
  }
  openDialog() {
    this.dialogRef = this.dialog.open(OrderDialogComponent, {
      data: this.dish,
      height: "400px",
      width: "400px",

    });
    this.dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
//Il problema è che nei dati json l'id non parte da 0 : fixare bug scaricando fake data da internet ASSICUARNDOSI CHE L'ID PARTA DA 0
