import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {

  public id:string="";
  constructor(private _studentService:StudentService,private _activateRoute:ActivatedRoute, private _router:Router){

    _activateRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id
        if(data.id){
          _studentService.get1StudentDetails(data.id).subscribe(
            (data:any)=>{
               this.studentForm.patchValue(data)
            },
            (err:any)=>{
              alert("error")
            }
          )
        }
    
      },
      (err:any)=>{
        console.log("error")
      }
    )
  }

  public studentForm:FormGroup=new FormGroup({
    name:new FormControl(),
    phone:new FormControl(),
    city:new FormControl(),
    fee:new FormControl(),
    image:new FormControl()
  })

  submit(){

    if(this.id){
         this._studentService.updateStudent(this.studentForm.value,this.id).subscribe(
          (data:any)=>{
            alert("updated successfully");
            this._router.navigateByUrl("/dashboard/student")
          },
          (err:any)=>{
            alert("error")
          }
         )
    }
    else{
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

}
