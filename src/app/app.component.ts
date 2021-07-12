import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LogDetailService } from './log-detail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  log:any=[];
constructor(private logdetailservice:LogDetailService){

}

ngOnInit() {

  this.subscription = this.logdetailservice.logChanged
  .subscribe(
    (log: any) => {
      this.log= log;
      console.log("detected");
    }
  );

}

ngOnDestroy() {
  this.subscription.unsubscribe();
} 



}
