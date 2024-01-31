import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateVehicleService {

  constructor() { }

  public vehicleDetails:any=[
    {
      "Vehicle": "Bugatti Roadster",
      "manufacturer": "Dodge",
      "model": "Corvette",
      "type": "Minivan",
      "fuel": "Gasoline",
      "color": "white",
      "image": "https://loremflickr.com/640/480/abstract",
      "id": "1"
  },
  {
      "Vehicle": "Bugatti Aventador",
      "manufacturer": "Honda",
      "model": "CTS",
      "type": "Convertible",
      "fuel": "Electric",
      "color": "sky blue",
      "image": "https://loremflickr.com/640/480/people",
      "id": "2"
  },
  {
      "Vehicle": "Nissan Expedition",
      "manufacturer": "Maserati",
      "model": "Focus",
      "type": "Extended Cab Pickup",
      "fuel": "Hybrid",
      "color": "lime",
      "image": "https://loremflickr.com/640/480/technics",
      "id": "3"
  },
  {
      "Vehicle": "Cadillac Beetle",
      "manufacturer": "Fiat",
      "model": "Ranchero",
      "type": "Cargo Van",
      "fuel": "Gasoline",
      "color": "teal",
      "image": "https://loremflickr.com/640/480/technics",
      "id": "4"
  },
  {
      "Vehicle": "Maserati Camaro",
      "manufacturer": "Rolls Royce",
      "model": "Model X",
      "type": "Coupe",
      "fuel": "Gasoline",
      "color": "ivory",
      "image": "https://loremflickr.com/640/480/sports",
      "id": "5"
  },
  {
      "Vehicle": "Audi A8",
      "manufacturer": "Porsche",
      "model": "Model X",
      "type": "SUV",
      "fuel": "Electric",
      "color": "fuchsia",
      "image": "https://loremflickr.com/640/480/sports",
      "id": "6"
  },
  {
      "Vehicle": "Bentley V90",
      "manufacturer": "Jeep",
      "model": "Golf",
      "type": "Passenger Van",
      "fuel": "Gasoline",
      "color": "tan",
      "image": "https://loremflickr.com/640/480/abstract",
      "id": "7"
  },
  ]
}
