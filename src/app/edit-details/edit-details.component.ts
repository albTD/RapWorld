import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LogDetailService } from '../log-detail.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {
  username:any;
  detail:any;
  editForm:FormGroup;

  constructor(private route:ActivatedRoute,private logdetailservice:LogDetailService,private http:HttpClient,private router:Router) {

    this.username=this.route.snapshot.params['username'];
    this.detail=this.route.snapshot.params['detail'];
    this.logdetailservice.insertLog(this.username);

   }

  ngOnInit(): void {

    this.editForm=new FormGroup({
    
      'number':new FormControl(null,[Validators.required,this.numberlength]),
      'address':new FormControl(null,Validators.required)

    });
    

  }

  numberlength(control:FormControl):{ [s:string]:boolean }{
    if(control.value){    
    
      if(control.value.toString().length!=10){
          return {'lengthminimum':true};
        }
        return null;
        }
    }
  
    onSubmit(){

      console.log(this.editForm.value);
if(this.detail=='number'){

  this.http.post('https://projrap.herokuapp.com/editDetails',{detail: this.editForm.value.number,username:this.username}).subscribe((res)=>{
    console.log(res);
    this.router.navigate(['/profile',this.username]);
  })

}else{

  this.http.post('https://projrap.herokuapp.com/editDetails',{detail: this.editForm.value.address,username:this.username}).subscribe((res)=>{
    console.log(res);
    this.router.navigate(['/profile',this.username]);
  })

}
  
    }


}
