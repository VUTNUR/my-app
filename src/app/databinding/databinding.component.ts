import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
    
  public age:number=20;

  public name:string='Nethaji';

  public ages:number[]=[1,2,3,4];
  public names:string[]=['hari','subhash'];

  public user:any={name:'abc',age:20};

  public phone:string="+91 "

  submit(){
    alert("submit clicked")
  }

  key(){
    alert("key pressed")
  }


}
