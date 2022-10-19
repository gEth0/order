import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GetDishesService } from 'src/app/get-dishes.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;
  constructor(private httpService: GetDishesService) { }

  ngOnInit(): void {
    this.httpService.getProfile().subscribe(data => {
      this.profile = data;
    })
    console.log(this.profile)
  }
}






