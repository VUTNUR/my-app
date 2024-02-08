import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  public baseUrl:string="https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction";

  constructor(private _httpClient:HttpClient) {
    
   }

  getVehicles():Observable<any>{
    return this._httpClient.get(this.baseUrl)
  }

  getVehicle(id:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"/"+id)
  }

  delete(id:string):Observable<any>{
    return this._httpClient.delete(this.baseUrl+"/"+id)
  }

  getFilteredVehicles(term:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?filter="+term)
  }

  getSortedVehicles(column:string,order:string):Observable<any>{
    return this._httpClient.get( this.baseUrl+"?sortBy="+column+"&order="+order)
  }

  getPaginatedVehicles(page:number):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?limit=10&page="+page)
  }

  createVehicle(val:any):Observable<any>{
    return this._httpClient.post(this.baseUrl,val)
  }

  updateVehicle(val:any, id:string):Observable<any>{
    return this._httpClient.put(this.baseUrl+"/"+id,val)
  }
}
