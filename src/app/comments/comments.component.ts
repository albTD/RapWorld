import { HttpClient } from '@angular/common/http';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogDetailService } from '../log-detail.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
username:any;
id:any;
comment:any;
comments:any=[];
  constructor(public route:ActivatedRoute,private logdetailservice:LogDetailService,private http:HttpClient) {
    this.username=this.route.snapshot.params['username'];
    this.id=this.route.snapshot.params['id'];
    this.logdetailservice.insertLog(this.username);
   }

  ngOnInit(): void {
    this.read();
    this.read();
  }


  abc(){

    const date=new Date();

     let body={
       name:this.username,
       postid:this.id,
       comment:this.comment,
       date:date.toDateString()
     }

     this.http.post("http://localhost:6002/commentPost",body).subscribe((res)=>{
console.log(res);
this.read();
      })  

  }

  read(){

    let body={
      postid:this.id
    }

    this.http.post("http://localhost:6002/commentRead",body).subscribe((res)=>{
      this.comments=res;
    })  

  }

}
