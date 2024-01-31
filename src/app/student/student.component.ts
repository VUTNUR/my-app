import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  public information:any=[];

  public filter:string='';

  public column:string='';

  public order:string='';

  public page:number=0;
  constructor(private _studentService:StudentService){
      _studentService.getStudentDetails().subscribe(
        (data:any)=>{
          this.information=data;
        },
        (err:any)=>{
          alert("error")
        }
      )
  }

  filterFunc(){
     this._studentService.getStudentFilterDetails(this.filter).subscribe(
      (data:any)=>{
        this.information=data
      },
      (err:any)=>{
         alert("error")
      }
     )
  }

  sort(){
    this._studentService.getStudentSortingDetails(this.column,this.order).subscribe(
      (data:any)=>{
         this.information=data;
      },
      (err:any)=>{
         alert("error")
      }
    )
  }

  pagination(){
    this._studentService.getStudentPaginationDetails(this.page).subscribe(
      (data:any)=>{
         this.information=data;
      },
      (err:any)=>{
         alert("Error")
      }
    )
  }

  deleteCard(id:string){
    this._studentService.deleteCard(id).subscribe(
      (data:any)=>{
            alert("Deleted Successfully");
            // console.log(data)
            location.reload();
      },
      (err:any)=>{
            alert("Error")
      }
    )
  }
}
