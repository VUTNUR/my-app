import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-operations-calci',
  templateUrl: './operations-calci.component.html',
  styleUrls: ['./operations-calci.component.css']
})
export class OperationsCalciComponent {

  @Output() operation:EventEmitter<number>=new EventEmitter();

  add(){
    this.operation.emit(1)
  }
  
  sub(){
    this.operation.emit(2)
  }

  mul(){
    this.operation.emit(3)
  }

  div(){
    this.operation.emit(4)
  }
}
