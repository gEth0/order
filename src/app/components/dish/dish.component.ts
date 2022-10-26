import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { GetDishesService } from 'src/app/services/get-dishes.service';
import { OrderDialogComponent } from '../dialogs/order-dialog/order-dialog.component';


@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit, AfterViewInit {
  @ViewChild('id') idRef!: ElementRef;
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
  ngAfterViewInit(): void {
    this.idRef = this.idRef.nativeElement.value
  }
  openDialog() {
    this.dialogRef = this.dialog.open(OrderDialogComponent, {
      data: this.dish,
      height: "400px",
      width: "400px",

    });
    this.dialogRef.afterClosed().subscribe((result: any) => {

    });
  }

}

