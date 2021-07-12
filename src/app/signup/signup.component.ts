import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(){

    this.signupForm=new FormGroup({
      'name':new FormControl(null,Validators.required),
      'username':new FormControl(null,Validators.required),
      'password':new FormControl(null,[Validators.required,this.passwordlength]),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'number':new FormControl(null,[Validators.required,this.numberlength]),
      'address':new FormControl(null,Validators.required)

    });
    

    }

  onSubmit(){
    console.log(this.signupForm.value.name);

 
    
let body={
  name:this.signupForm.value.name,
  username:this.signupForm.value.username,
  password:this.signupForm.value.password,
  email:this.signupForm.value.email,
  mobileno:this.signupForm.value.number,
  address:this.signupForm.value.address
}
console.log(body);
this.http.post('http://localhost:6002/signup',body).subscribe((res)=>{
  console.log(res);
if(res==1){
this.router.navigate(['/login']);
}else{
  console.log('Cannot sign in');
}

})

    // this.signupForm.reset();
  }

  numberlength(control:FormControl):{ [s:string]:boolean }{
if(control.value){    

  if(control.value.toString().length!=10){
      return {'lengthminimum':true};
    }
    return null;
    }
}

passwordlength(control:FormControl):{ [s:string]:boolean }{
  if(control.value){    
  
    if(control.value.toString().length<6){
        return {'passminimum':true};
      }
      return null;
      }
  }


}
