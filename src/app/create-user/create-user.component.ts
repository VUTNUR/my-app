import { Component } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  public userForm:FormGroup=new FormGroup({
    name:new FormControl(),
    age:new FormControl(),
    email: new FormControl(),
    phone : new FormControl(),
    address: new FormGroup({
      hno: new FormControl(),
      state: new FormControl(),
      pincode:new FormControl()
    }),
    cards:new FormArray([])
  })

  get cardFormArray(){
    return this.userForm.get('cards') as FormArray;
  }

  add(){
    this.cardFormArray.push(
      new FormGroup({
        cardno: new FormControl(),
        expiry:new FormControl(),
        cvv:new FormControl()
      })
    )
  }


  submit(){
    console.log(this.cardFormArray)
    console.log(this.userForm.value)
  }

  delete(i:number){
     this.cardFormArray.removeAt(i)
  }
}
