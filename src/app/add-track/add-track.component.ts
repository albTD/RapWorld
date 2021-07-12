import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-track',
  templateUrl: './add-track.component.html',
  styleUrls: ['./add-track.component.css']
})
export class AddTrackComponent implements OnInit {
  trackForm:FormGroup;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.trackForm=new FormGroup({
      'imagePath':new FormControl(null,Validators.required),
      'name':new FormControl(null,Validators.required),
      'link':new FormControl(null,Validators.required),
      'tname':new FormControl(null,Validators.required)
    });

  }

  onSubmit(){

let body={

  name:this.trackForm.value.name,
  imagePath:this.trackForm.value.imagePath,
  tname:this.trackForm.value.tname,
  link:this.trackForm.value.link

}

this.http.post("http://localhost:6002/track",body).subscribe((res)=>{
console.log(res);

this.trackForm.reset();

})

  }

}
