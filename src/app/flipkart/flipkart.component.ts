import { Component } from '@angular/core';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
   public details:any=[];

   constructor(private _flipkartService:FlipkartService){
    _flipkartService.getFlipkartDetails().subscribe(
      (data:any)=>{
       this.details=data
      },
      (err:any)=>{
        alert("error in fetching")
      }
    )
   }
}
