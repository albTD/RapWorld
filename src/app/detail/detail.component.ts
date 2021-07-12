import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogDetailService } from '../log-detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  username:any;
  artists:any=[];
  aname:any;
  constructor(private route:ActivatedRoute,private logdetailservice:LogDetailService,private http:HttpClient) { 

    this.username=this.route.snapshot.params['username'];
    this.logdetailservice.insertLog(this.username);
  }

  ngOnInit(): void {
    this.http.get("http://localhost:6002/readArtist").subscribe((res)=>{
this.artists=res;
console.log(res);
    })
  }

Search(){

  if(this.aname==""){
    this.ngOnInit();
  }else{
this.artists=this.artists.filter(res=>{
  return res.name.toLocaleLowerCase().match(this.aname.toLocaleLowerCase());
})
  }

}


}
