import { Component, OnInit } from '@angular/core';
import { PickUpService } from '../pick-up.service';
import {NgbDate, NgbCalendar, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-pick-up',
  templateUrl: './pick-up.component.html',
  styleUrls: ['./pick-up.component.css']
})
export class PickUpComponent implements OnInit {

  public place_holder = 'city, airport, station, region and district...';
  public locations_result = 0;
  public location = '';

  
  constructor(private pickservice : PickUpService) {

  }

  ngOnInit() {


  }
  
  get_location(){
    console.log("Entrou")
    if(this.location.length >=1){
      this.pickservice.get_location(this.location).subscribe(
        (result: any) => {
          this.locations_result = result.results.docs;
          console.log(result);
        },
        (error: any) => {
          console.log(error);
      });
    }
  
  }


  
}
