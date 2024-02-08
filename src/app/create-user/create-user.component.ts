import { Component } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  public userForm:FormGroup=new FormGroup({
    name:new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    age:new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl("",[Validators.required, Validators.email]),
    phone : new FormControl("",[Validators.required, Validators.min(1000000000), Validators.max(9999999999)]),
    address: new FormGroup({
      hno: new FormControl(),
      state: new FormControl(),
      pincode:new FormControl("",[Validators.required, Validators.min(100000), Validators.max(999999)])
    }),
    cards:new FormArray([]),
    type: new FormControl(),
    busFee: new FormControl(),
    hostelFee:new FormControl()
  })

  get cardFormArray(){
    return this.userForm.get('cards') as FormArray;
  }

  add(){
    this.cardFormArray.push(
      new FormGroup({
        cardno: new FormControl(),
        expiry:new FormControl(),
        cvv:new FormControl("", [Validators.required, Validators.min(100), Validators.max(999)])
      })
    )
  }


  submit(){
    console.log(this.cardFormArray)
    console.log(this.userForm)
  }

  delete(i:number){
     this.cardFormArray.removeAt(i)
  }
}
