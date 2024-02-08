import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {

  public id:string="";

  constructor(private _vehicleService:VehicleService, private _activatedRoute:ActivatedRoute, private _router:Router){
    // _activatedRoute.params.subscribe(
    //   (data:any)=>{
    //     console.log(typeof data.id)
    //     this.id=data.id;
    //     // alert(data.id);
    //     _vehicleService.getVehicle(data.id).subscribe(
    //       (data:any)=>{
    //          this.vehicleForm.patchValue(data)
    //       },
    //       (err:any)=>{
    //          console.log("error")
    //       }
    //     )
    //   },
    //   (err:any)=>{
    //     alert("error")
    //   }
    // )
  }

  ngOnInit(){
    this._activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(typeof data.id)
        this.id=data.id;
        // alert(data.id);
        this._vehicleService.getVehicle(data.id).subscribe(
          (data:any)=>{
             this.vehicleForm.patchValue(data)
          },
          (err:any)=>{
             console.log("error")
          }
        )
      },
      (err:any)=>{
        alert("error")
      }
    )
  }

 public vehicleForm:FormGroup=new FormGroup({
  Vehicle: new FormControl(),
  manufacturer: new FormControl(),
  model: new FormControl(),
  type: new FormControl(),
  color: new FormControl(),
  image: new FormControl()
 })

 submit(){

  if(this.id){

    this._vehicleService.updateVehicle(this.vehicleForm.value,this.id).subscribe(
      (data:any)=>{
        alert("updated succesfully");
        this._router.navigateByUrl("/dashboard/vehicle")
      },
      (error:any)=>{
        alert("error")
      }
    )
  }
  else{
    console.log(this.vehicleForm);
    this._vehicleService.createVehicle(this.vehicleForm.value).subscribe((data:any)=>{
      alert("succesfully posted");
      this.vehicleForm.reset();
    },
    (err:any)=>{
       alert("error")
    })
   }
  }
}
