import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  public text:string='';

//  public oArray:any=[
//   {sNo:1, name:'pen', price:10, rating:3, delivery:true},
//   {sNo:2, name:'phone', price:100, rating:2, delivery:false},
//   {sNo:3, name:'shirt', price:400, rating:4, delivery:true},
//   {sNo:4, name:'cap', price:200, rating:5, delivery:false},
//   {sNo:5, name:'mobile case', price:300, rating:2, delivery:true},
//   {sNo:6, name:'remote', price:400, rating:2.5, delivery:false}
//  ]

 public newUser:any={name:'',price:0,rating:0, delivery:false}
  
  public users:any=[
    {sNo:1, name:'pen', price:10, rating:3, delivery:true},
    {sNo:2, name:'phone', price:100, rating:2, delivery:false},
    {sNo:3, name:'shirt', price:400, rating:4, delivery:true},
    {sNo:4, name:'cap', price:200, rating:5, delivery:false},
    {sNo:5, name:'mobile case', price:300, rating:2, delivery:true},
    {sNo:6, name:'remote', price:400, rating:2.5, delivery:false}
  ]

  

  ascend(){
    this.users=this.users.sort((a:any,b:any)=>a.price-b.price)
  }
  descend(){
    this.users=this.users.sort((a:any,b:any)=>b.price-a.price)
  }
  ascendR(){
    this.users=this.users.sort((a:any,b:any)=>a.rating-b.rating)
  }
  descendR(){
    this.users=this.users.sort((a:any,b:any)=>b.rating-a.rating)
  }

  filterByText(){
    
      this.users=this.users.filter((user:any)=>user.name.includes(this.text));
  }
  
  delivery(){
    this.users=this.users.filter((user:any)=>user.delivery==true)
  }
  
  discount(){
    console.log("hi")
   this.users=this.users.map((user:any)=>{
         return {...user, price: (user.price)/2}
   })
  }

  extraCharges(){
    this.users=this.users.map((user:any)=>{
      return {...user, price:(user.price)+10}
    })
  }

  totalPrice(){
    alert(this.users.reduce((sum:number,el:any)=>{
      return sum+el.price
    },0))
  }

  cartItems(){
    alert(this.users.length)
  }

  addToCart(){
    let obj={...this.newUser}
    console.log(obj)
    this.users.push(obj)
  }

  delete(i:number){
      this.users.splice(i,1);
  }
}
