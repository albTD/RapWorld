import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogDetailService } from '../log-detail.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
username:any;
id:any;
artists:any=[];
tracks:any=[];
name:any;

  constructor(private route:ActivatedRoute,private logdetailservice:LogDetailService,private http:HttpClient) { 

    this.username=this.route.snapshot.params['username'];
    this.id=this.route.snapshot.params['id'];
    this.logdetailservice.insertLog(this.username);

  }

  ngOnInit(): void {

let body={
  id:this.id
}

console.log(body);

this.http.post("https://projrap.herokuapp.com/selectedArtist",body).subscribe((res)=>{
this.artists.push(res);
this.name=this.artists[0].name;

this.http.post("https://projrap.herokuapp.com/sortTrack",{name:this.name}).subscribe((res1)=>{
this.tracks=res1;
console.log(res1);
})

console.log(res);
})



  }

}
