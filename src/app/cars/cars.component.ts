import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  public hondaP:number=0;
  honda(val:number){
    this.hondaP=val
    console.log(val)
  }
}
