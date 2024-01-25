import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
  // public age:number=12;
  // public name:string='vasu';

  public radius:number=0;
  public res:number=0;

  area(){
    this.res=3.14*this.radius*this.radius
  }
  perimeter(){
    this.res=2*3.14*this.radius
  }
}
