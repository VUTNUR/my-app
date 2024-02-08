import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  public pInput='';

  public bP='';

  catch(value:string){
   this.bP=value;
  }
}
