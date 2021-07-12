import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { LogDetailService } from '../log-detail.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {
username:any;
value=true;


  constructor(private logdetailservice:LogDetailService,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.username=this.logdetailservice.log[0];

    
  }

  onSubmit(form:NgForm){

let body={
  bio:form.value.bio,
  username:this.username
} 
console.log(body);

this.http.post("http://localhost:6002/bio",body,{responseType: 'text'}).subscribe((res)=>{
console.log(res);
form.reset();
this.value=!this.value;
this.logdetailservice.bioChange();
})

}

cancel(){
  this.value=!this.value;
}

}
