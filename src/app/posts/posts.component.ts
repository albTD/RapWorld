import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogDetailService } from '../log-detail.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
username:any;
posts:any;
users:any;
  constructor(private route:ActivatedRoute,private http:HttpClient,private logdetailservice:LogDetailService,public router:Router) { 
    this.username=this.route.snapshot.params['username'];
this.logdetailservice.insertLog(this.username);
  }

  ngOnInit(): void {


console.log(this.username);
this.http.get('http://localhost:6002/postsRead').subscribe((res)=>{
console.log(res);
this.posts=res;
})

this.http.get('http://localhost:6002/userDetail').subscribe((res)=>{
console.log(res);
this.users=res;
})

  }

  profile(pusername:any){

if(pusername==this.username){
this.router.navigate(['/profile',this.username]);
}else{
  this.router.navigate(['/profile',this.username,'view',pusername]);
}

  }

}
