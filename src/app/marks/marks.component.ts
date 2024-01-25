import { Component } from '@angular/core';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent {
    public users:any=[
      {name:'a',sub:'English', marks:90, result:'Pass'},
      {name:'b',sub:'Maths', marks:95, result:'Pass'},
      {name:'c',sub:'Physics', marks:85, result:'Pass'},
      {name:'d',sub:'Telugu', marks:30, result:'Fail'}
    ]

    public today=new Date();
}
