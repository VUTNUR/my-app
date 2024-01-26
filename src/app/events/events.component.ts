import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  public newName:string='';

 public arr:string[]=['nethaji','vasu', 'afzal'];

 addUser(){
  this.arr.push(this.newName)
 }
  
 delete(val:number){
  this.arr.splice(val,1)
 }
}
