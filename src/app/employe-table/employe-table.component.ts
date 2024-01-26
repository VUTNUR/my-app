import { Component } from '@angular/core';

@Component({
  selector: 'app-employe-table',
  templateUrl: './employe-table.component.html',
  styleUrls: ['./employe-table.component.css']
})
export class EmployeTableComponent {

  public users:any=[
    {name:'a', company:'TCS', experience:4,package:110000, workingEmployee:true},
    {name:'b', company:'INFOSYS', experience:3,package:310000, workingEmployee:false},
    {name:'c', company:'CAPGEMINI', experience:6,package:100000, workingEmployee:true},
    {name:'d', company:'DELOITE', experience:8,package:4410000, workingEmployee:false},
  ]

  ELH(){
    this.users=this.users.sort((a:any,b:any)=>a.experience-b.experience)
  }
  EHL(){
    this.users=this.users.sort((a:any,b:any)=>b.experience-a.experience)
  }
  PLH(){
    this.users=this.users.sort((a:any,b:any)=>a.package-b.package)
  }
  PHL(){
    this.users=this.users.sort((a:any,b:any)=>b.package-a.package)
  }

  addHike(){
    this.users=this.users.map((el:any)=>{
         return {...el,package:el.package +(el.package*(20/100))}
    })
  }

  addBonus(){
    this.users=this.users.map((el:any)=>{
      return {...el,package:el.package+50000}
    })
  }

  filterJ(){
    // console.log(this.users)
     this.users=this.users.filter((el:any)=>{
      // console.log(el.experience, typeof(el.experience))
         return el.experience<=5;
     })
  }

  filterS(){
    this.users=this.users.filter((el:any)=>{
      // console.log(el.experience, typeof(el.experience))
         return el.experience>=5;
     })
  }

  totalCtc(){
    alert(this.users.reduce((sum:number,el:any)=>{
         return sum+el.package
    },0))
  }

  totalEmp(){
    alert(this.users.length)
  }
}
