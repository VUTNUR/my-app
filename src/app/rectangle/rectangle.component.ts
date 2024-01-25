import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {
   
  public l:number=0;
  public b:number=0;
  public res:number=0;

  area(){
    this.res=this.l*this.b;
  }

  perimeter(){
    this.res=2*(this.l+this.b)
  }
}
