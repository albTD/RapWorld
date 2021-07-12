import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { LogDetailService } from '../log-detail.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
username:any;
  constructor(private http:HttpClient,private route:ActivatedRoute,private logdetailservice:LogDetailService,public router:Router) {

    this.router.events
    .subscribe((event: NavigationStart) => {
      if (event.navigationTrigger === 'popstate') {
        console.log('Back button pressed');
        this.username=this.logdetailservice.log[0];
        this.router.navigate(['/home',this.username]);
      }
    });


   }

  ngOnInit(): void {
this.username=this.logdetailservice.log[0];
console.log(this.route);
let body={
  username:this.username
}
console.log(body);
// this.http.post("http://localhost:6002/currentUser",body).subscribe((res)=>{

// })

  }

logout(){

  this.logdetailservice.emptyLog();

}


}
