import { Component } from '@angular/core';
import { OperationService } from '../operation.service';

@Component({
  selector: 'app-input-calci',
  templateUrl: './input-calci.component.html',
  styleUrls: ['./input-calci.component.css']
})
export class InputCalciComponent {
 public num1:number=0;
 public num2:number=0;
 
 constructor(private _operationService:OperationService){};

 catch(val:number){
   if(val==1){
    this._operationService.setValue(this.num1+this.num2)
   }
   else if(val==2){
    this._operationService.setValue(this.num1-this.num2)
   }
   else if(val==3){
    this._operationService.setValue(this.num1*this.num2)
   }
   else{
    this._operationService.setValue(this.num1/this.num2)
   }
 }
}
