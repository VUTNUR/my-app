import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  public ages:number[]=[14,21,30,41];

  public states:string[]=['andhra', 'telangana', 'up'];

  public users:any=[
    {name:"nethi", age:20, phone:987},
    {name:"hari", age:21, phone:983},
    {name:"venu", age:22, phone:987},
    {name:"venky", age:30, phone:947}
  ];

  
}
