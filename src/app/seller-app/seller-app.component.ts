import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { SellerAppService } from '../seller-app.service';

@Component({
  selector: 'app-seller-app',
  templateUrl: './seller-app.component.html',
  styleUrls: ['./seller-app.component.css']
})
export class SellerAppComponent {

  constructor(private _sellerAppService:SellerAppService){}

  public sellerForm=new FormGroup({
    name: new FormControl("",[Validators.required]),
    price: new FormControl("",[Validators.required, Validators.min(0)]),
    model: new FormControl("",[Validators.required]),
    freeDelivery: new FormControl("",[Validators.required]),
    image: new FormControl("",[Validators.required]),
    waranty: new FormGroup({
      eligible:new FormControl("",[Validators.required]),
      months:new FormControl("",[Validators.required, Validators.min(0)])
    }),
    ratings:new FormGroup({
      one:new FormControl("",[Validators.required, Validators.min(0)]),
      two:new FormControl("",[Validators.required, Validators.min(0)]),
      three:new FormControl("",[Validators.required, Validators.min(0)]),
      four:new FormControl("",[Validators.required, Validators.min(0)]),
      five:new FormControl("",[Validators.required, Validators.min(0)])
    }),
    sellerInfo:new FormArray([]),
    comments: new FormArray([]),
    productType:new FormControl("",[Validators.required]),
    width:new FormControl("",[Validators.required]),
    height:new FormControl("",[Validators.required]),
    weight:new FormControl("",[Validators.required])
  })

  get sellerInfoArray(){
    return this.sellerForm.get('sellerInfo') as FormArray;
  }

  get commentsArray(){
    return this.sellerForm.get('comments') as FormArray
  }

  addSeller(){
    this.sellerInfoArray.push(
      new FormGroup({
        name: new FormControl("", [Validators.required]),
        address:new FormGroup({
          line1: new FormControl("",[Validators.required]),
          area: new FormControl("",[Validators.required]),
          city: new FormControl("",[Validators.required]),
          pincode: new FormControl("",[Validators.required, Validators.min(100000), Validators.max(999999)])
        })
      })
    )
  }

  addComment(){
    this.commentsArray.push(
      new FormGroup({
        time:new FormControl("",[Validators.required]),
        message:new FormControl("",[Validators.required,Validators.minLength(10)])
      })
    )
  }

  delete(i:number){
    this.sellerInfoArray.removeAt(i)
  }
  createProduct(){
    console.log(this.sellerForm.value)
    console.log(this.sellerInfoArray)
    console.log(this.commentsArray)
    this._sellerAppService.createPhoneModel(this.sellerForm.value).subscribe(
      (data:any)=>{
        alert('posted successfully')
      },
      (err:any)=>{
        alert("internal error")
      }
      )
  }
}
