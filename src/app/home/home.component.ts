import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LogDetailService } from '../log-detail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
detailForm:FormGroup;
username:any;

  constructor(public route:ActivatedRoute,private http:HttpClient,private logdetailservice:LogDetailService) {
    this.username=this.route.snapshot.params['username'];
    this.logdetailservice.insertLog(this.username);
   }

  ngOnInit(): void {

    this.detailForm=new FormGroup({
      'imagePath':new FormControl(null,Validators.required),
      'videoPath':new FormControl(null,Validators.required),
      'description':new FormControl(null,Validators.required)
    });

   

  }

onSubmit(){

console.log(this.detailForm.value);
const date=new Date();
let body={
  username:this.username,
  imagePath:this.detailForm.value.imagePath,
  videoPath:this.detailForm.value.videoPath,
  description:this.detailForm.value.description,
  date:date.toDateString()
}

console.log(body);
this.http.post("http://localhost:6002/posts",body).subscribe((res)=>{

if(res==1){
  this.detailForm.reset();
}else{
  console.log(res);
}

})

}



}
