import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modify-dialog',
  templateUrl: './modify-dialog.component.html',
  styleUrls: ['./modify-dialog.component.css']
})
export class ModifyDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public dish: any, public dialogRef: MatDialogRef<ModifyDialogComponent>) { }
  quantity!: number;
  ngOnInit(): void {
    this.quantity = 1;
  }
  onCloseClick() {
    this.dialogRef.close();
  }
}
