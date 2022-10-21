import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GetDishesService } from 'src/app/services/get-dishes.service';
import { GetProfileService } from 'src/app/services/get-profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;
  constructor(private httpService: GetProfileService) { }

  ngOnInit(): void {
    this.httpService.getProfile().subscribe(data => {
      this.profile = data;
    })

  }
}






