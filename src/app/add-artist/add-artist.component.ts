import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.component.html',
  styleUrls: ['./add-artist.component.css']
})
export class AddArtistComponent implements OnInit {
artistForm:FormGroup;


  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.artistForm=new FormGroup({
      'imagePath':new FormControl(null,Validators.required),
      'name':new FormControl(null,Validators.required),
      'place':new FormControl(null,Validators.required),
      'about':new FormControl(null,Validators.required),
      'label':new FormControl(null,Validators.required),
      'beef':new FormControl(null,Validators.required),
      'instagram':new FormControl(null,Validators.required),
      'facebook':new FormControl(null,Validators.required),
      'twitter':new FormControl(null,Validators.required),
      'spotify':new FormControl(null,Validators.required)
    });

  }


  onSubmit(){

let body={
  imagePath:this.artistForm.value.imagePath,
  name:this.artistForm.value.name,
  place:this.artistForm.value.place,
  about:this.artistForm.value.about,
  label:this.artistForm.value.label,
  beef:this.artistForm.value.beef,
  instagram:this.artistForm.value.instagram,
  facebook:this.artistForm.value.facebook,
  twitter:this.artistForm.value.twitter,
  spotify:this.artistForm.value.spotify
}

console.log(body);

this.http.post("http://localhost:6002/artist",body).subscribe((res)=>{
console.log(res);
this.artistForm.reset();
})

  }

}
