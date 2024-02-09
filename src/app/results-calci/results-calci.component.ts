import { Component } from '@angular/core';
import { OperationService } from '../operation.service';

@Component({
  selector: 'app-results-calci',
  templateUrl: './results-calci.component.html',
  styleUrls: ['./results-calci.component.css']
})
export class ResultsCalciComponent {
 public result:number=0;
  constructor(private _operationService:OperationService){
       _operationService.getValue().subscribe((data:number)=>{
        this.result=data;
       })
  }

  
}
