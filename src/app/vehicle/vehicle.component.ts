import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {


  public term:string='';
  public vehicles:any=[];

  public column:string='';
  public order:string='';

  public page:number=0;

   constructor(private _vehicleService:VehicleService){
       _vehicleService.getVehicles().subscribe(
        (data:any)=>{
          this.vehicles=data
        },
        (err:any)=>{
          alert("error")
        }
       )
   }


   
   deleteFunc(id:string){
      this._vehicleService.delete(id).subscribe(
        (data:any)=>{
          alert(data.Vehicle+"deleted");
          location.reload()
        },
        (err:any)=>{
          alert("error")
        }
      )
   }
   
   filterFunc(){
    this._vehicleService.getFilteredVehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles=data
      },
      (err:any)=>{
           alert("error")
      }
    )
   }

   sortFunc(){
    this._vehicleService.getSortedVehicles(this.column,this.order).subscribe(
      (data:any)=>{
         this.vehicles=data
      },
      (err:any)=>{
        alert("error")
      }
    )
   }

   pagination(){
    this._vehicleService.getPaginatedVehicles(this.page).subscribe(
      (data:any)=>{
        this.vehicles=data
      },
      (err:any)=>{
        alert("error")
      }
    )
   }
   
}
