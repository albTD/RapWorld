import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LogDetailService } from '../log-detail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
detailForm:FormGroup;
username:any;
inpFile:any;
formData:any;
  constructor(public route:ActivatedRoute,private http:HttpClient,private logdetailservice:LogDetailService,public router:Router) {
    this.username=this.route.snapshot.params['username'];
    this.logdetailservice.insertLog(this.username);
   }

  ngOnInit(): void {

    // document.querySelectorAll(".drop-zone__input").forEach(inputElement=>{
    //   const dropZoneElement=inputElement.closest(".drop-zone");

    //   dropZoneElement.addEventListener("dragover",e=>{
    //     e.preventDefault();
    //     dropZoneElement.classList.add("drop-zone--over");
    //   });

    //   ["dragleave","dragend"].forEach(type=>{
    //     dropZoneElement.addEventListener(type,e=>{
    //         dropZoneElement.classList.remove("drop-zone--over");
    //     });
    //   });

    //   dropZoneElement.addEventListener("drop",e=>{
    //     e.preventDefault();
    //     console.log(e.dataTransfer.files);

    //     if(e.dataTransfer.files.length){
    //       inputElement.files=e.dataTransfer.files;
    //       this.updateThumbnail(dropZoneElement,e.dataTransfer.files[0]);
    //     }

    //     dropZoneElement.classList.remove("drop-zone--over");

    //   });

    // });
     
    // Array.prototype.forEach.call(document.querySelectorAll('.file-upload__button'),function(button){
    //    const hiddenInput=button.parentElement.querySelector('.file-upload__input');
    //    const label=button.parentElement.querySelector('.file-upload__label');
    //    const defaultLabelText='No file selected';

    //    label.textContent=defaultLabelText;
    //    label.title=defaultLabelText;

    //    button.addEventListener('click',function(){
    //     hiddenInput.click();
    //    });
       
    //    hiddenInput.addEventListener('change',function(){
    
    //     const filenameList=Array.prototype.map.call(hiddenInput.files,function(file){
    //         return file.name;
    //     });
    //    label.textContent=filenameList.join(', ')|| defaultLabelText;
    //    label.title=label.textContent;

    //    });


    // });

    // const myForm=document.getElementById("detailForm");
    // this.inpFile=document.getElementById("inpFile");

    // myForm.addEventListener("submit",e=>{
    //   e.preventDefault();
    //   this.formData=new FormData();

    //   this.formData.append("inpFile",this.inpFile.files[0]);
    //   this.http.post("http://localhost:6002/audioUpload",formData).subscribe((res)=>{
    //       console.log("file uploaded");
    //   })

    // })



    this.detailForm=new FormGroup({
      'imagePath':new FormControl(null,Validators.required),
      'videoPath':new FormControl(null,Validators.required),
      'description':new FormControl(null,Validators.required)
    });

   

  }

onSubmit(){

console.log(this.detailForm.value);

const date=new Date();
this.inpFile=document.getElementById("inpFile");
this.formData=new FormData();
this.formData.append("inpFile",this.inpFile.files[0]);
this.formData.append("username",this.username);
this.formData.append("imagePath",this.detailForm.value.imagePath);
this.formData.append("videoPath",this.detailForm.value.videoPath);
this.formData.append("description",this.detailForm.value.description);
this.formData.append("date",date.toDateString());

// let body={
//   username:this.username,
//   imagePath:this.detailForm.value.imagePath,
//   videoPath:this.detailForm.value.videoPath,
//   description:this.detailForm.value.description,
//   date:date.toDateString()
// }

console.log(this.formData);
this.http.post("https://projrap.herokuapp.com/posts",this.formData).subscribe((res)=>{

if(res==1){
  // this.detailForm.reset();
  this.router.navigate(['/home',this.username]);
}else{
  console.log(res);
}

})

}

// updateThumbnail(dropZoneElement:any,file:any){
//   let thumbnailElement=dropZoneElement.querySelector(".drop-zone__thumb");

// if(dropZoneElement.querySelector(".drop-zone__prompt")){
//   dropZoneElement.querySelector(".drop-zone__prompt").remove();
// }

//   if(!thumbnailElement){
//     thumbnailElement=document.createElement("div");
//     thumbnailElement.classList.add("drop-zone__thumb");
//     dropZoneElement.appendChild(thumbnailElement);
//   }

//   thumbnailElement.dataset.label=file.name;
//  console.log(dropZoneElement);
//  console.log(file);
// }




}
