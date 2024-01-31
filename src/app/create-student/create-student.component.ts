import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {

  constructor(private _studentService:StudentService){}

  public studentForm:FormGroup=new FormGroup({
    name:new FormControl(),
    phone:new FormControl(),
    city:new FormControl(),
    fee:new FormControl(),
    image:new FormControl()
  })

  submit(){
    console.log(this.studentForm.value)
    this._studentService.createStudent(this.studentForm.value).subscribe(
      (data:any)=>{
         alert("succesfully posted")
      },
      (err:any)=>{
         alert("error")
      }
    )
  }

}
