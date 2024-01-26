import { Component } from '@angular/core';
import { BoredPlayService } from '../bored-play.service';

@Component({
  selector: 'app-bored-play',
  templateUrl: './bored-play.component.html',
  styleUrls: ['./bored-play.component.css']
})
export class BoredPlayComponent {

  public details:any={};
  constructor(private _boredPlayService:BoredPlayService){
       _boredPlayService.getDetails().subscribe(
        (data:any)=>{
            this.details=data;
        },
        (err:any)=>{
             alert("error")
        }
       )
  }
  reload(){
    this._boredPlayService.getDetails().subscribe(
      (data:any)=>{
          this.details=data;
      },
      (err:any)=>{
           alert("error")
      }
     )
  }
}
