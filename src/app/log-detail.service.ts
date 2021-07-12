import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogDetailService {
  logChanged = new Subject<any>();
  bioChanged = new Subject<any>();
log=[];
  constructor() { }

insertLog(detail:any){
  this.log.push(detail);
  console.log(this.log);
  this.logChanged.next(this.log);
}

emptyLog(){
  
  this.log=[];
  console.log(this.log);
  this.logChanged.next(this.log);

}

bioChange(){
  this.bioChanged.next("done");
}


}
