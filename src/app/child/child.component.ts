import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
 @Input() public cInput='';

 public bc="";

 @Output() public bEvent:EventEmitter<string>=new EventEmitter();

 send(){
  this.bEvent.emit(this.bc);
 }
}
