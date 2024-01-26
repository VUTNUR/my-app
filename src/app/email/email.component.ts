import { Component } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {

  public emailDetails:any=[];
  constructor(private _emailService:EmailService){
    _emailService.getEmailDetails().subscribe(
      (data:any)=>{
        this.emailDetails=data
      },
      (err)=>{
        alert("error")
      }
    ) 
  }
}
