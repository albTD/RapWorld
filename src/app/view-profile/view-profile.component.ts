import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogDetailService } from '../log-detail.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
username:any;
vusername:any;
posts:any=[];
users:any=[];
  constructor(private route:ActivatedRoute,private logdetailservice:LogDetailService,private http:HttpClient,private router:Router) { 

    this.username=this.route.snapshot.params['username'];
    this.vusername=this.route.snapshot.params['vusername'];
    this.logdetailservice.insertLog(this.username);

  }

  ngOnInit(): void {

    let body={
      username:this.vusername
    }

    this.http.post('https://projrap.herokuapp.com/currentUserPost',body).subscribe((res)=>{
      console.log(res);
      this.posts=res;
      })
      
      this.http.post('https://projrap.herokuapp.com/currentUserDetail',body).subscribe((res)=>{
      console.log(res);
      this.users.push(res);
      })

  }

}
