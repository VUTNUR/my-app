import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
   public h:number=0;
   public w:number=0;
   public res:string='';
  
   BMI(){
    this.res=(this.w/((this.h/100)*(this.h/100))).toFixed(2);
   }
}
