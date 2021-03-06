import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavigationStart, Router } from '@angular/router';
import { LogDetailService } from '../log-detail.service';
import { HostListener } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})




export class LoginComponent{

constructor(private router:Router,private http:HttpClient){

  this.router.events
  .subscribe((event: NavigationStart) => {
    if (event.navigationTrigger === 'popstate') {
      console.log('Back button pressed');
      this.router.navigate(['/login']);
    }
  });

}

// @HostListener('window:popstate', ['$event'])
// onPopState(event) {
//   console.log('Back button pressed');

// }


signup(){
this.router.navigate(['/signup'])
}

onSubmit(form:NgForm){
console.log(form.value);
let body={
username:form.value.username,
password:form.value.password
}
this.http.post("https://projrap.herokuapp.com/login",body).subscribe((res)=>{
  console.log(res);
  if(res==1){
   
    this.router.navigate(['home',form.value.username])
    form.reset();
  }
else{
    console.log('error while log in');
    this.toast();
  }

})

}

toast(){
  $(document).ready(function(){
    $('.toast').toast('show');
  });
}


}
