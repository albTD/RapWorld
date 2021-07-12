import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LogDetailService } from '../log-detail.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
posts:any=[];
username:any;
users:any=[];
value=false;
subscription:Subscription;

  constructor(private route:ActivatedRoute,private logdetailservice:LogDetailService,private http:HttpClient,private router:Router) { 

    this.username=this.route.snapshot.params['username'];
    this.logdetailservice.insertLog(this.username);

  }

  ngOnInit(): void {

    this.subscription = this.logdetailservice.bioChanged
  .subscribe(
    (log: any) => {   
      setTimeout(()=>{ console.log("reload");
    
      let body={
        username:this.username
      }

        this.http.post('http://localhost:6002/currentUserDetail',body).subscribe((res)=>{
        console.log(res);
        this.users=[]
        this.users.push(res);
        this.value=!this.value;
        })
    
    
    },1000); 
     
    }
  );

    let body={
      username:this.username
    }

    this.http.post('http://localhost:6002/currentUserPost',body).subscribe((res)=>{
      console.log(res);
      this.posts=res;
      })
      
      this.http.post('http://localhost:6002/currentUserDetail',body).subscribe((res)=>{
      console.log(res);
      this.users.push(res);
      })

  }


  biodata(){
this.value=!this.value;
  }

}
