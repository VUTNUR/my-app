import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
 public count:number=0;

 public countSub$:BehaviorSubject<number>=new BehaviorSubject(this.count);
  constructor() { }

  setValue(){
    this.countSub$.next(++this.count);
  }

  getValue(){
    return this.countSub$;
  }
}
