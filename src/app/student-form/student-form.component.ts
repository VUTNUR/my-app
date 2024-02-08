import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {

  public studentForm:FormGroup=new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(10)] ),
    class: new FormControl("", [Validators.required, Validators.min(0), Validators.max(12)]),
    fatherName: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl("",[Validators.required]),
    dob: new FormControl(),
    address:new FormGroup({
      addressLine: new FormControl("",[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      city:new FormControl(),
      state:new FormControl(),
      pincode:new FormControl()
    }),
    marks:new FormArray([]),
    type:new FormControl(),
    busFee: new FormControl(),
    hostelFee: new FormControl()
  })

  get marksArray(){
    return this.studentForm.get('marks') as FormArray;
  }

  add(){
    this.marksArray.push(
      new FormGroup({
        class: new FormControl(),
        year: new FormControl(),
        percentage: new FormControl()
      })
    )
  }
  submit(){
    console.log(this.studentForm)
    console.log(this.marksArray)
  }
}
