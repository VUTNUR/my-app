import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component {
  public cartCount:number=0;
  constructor(private _commoneService:CommonService){
   
    _commoneService.getValue().subscribe(
      (data:number)=>{
        this.cartCount=data;
      }
    )
  }


}
