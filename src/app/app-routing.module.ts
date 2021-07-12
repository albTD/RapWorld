import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddArtistComponent } from './add-artist/add-artist.component';
import { AddTrackComponent } from './add-track/add-track.component';
import { CommentsComponent } from './comments/comments.component';
import { DetailComponent } from './detail/detail.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

const routes: Routes = [
  {path:'',redirectTo: '/login', pathMatch: 'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'artist',component:AddArtistComponent},
  {path:'track',component:AddTrackComponent},
  {path:'home/:username',component:PostsComponent},
  {path:'post/:username',component:HomeComponent},
  {path:'profile/:username',component:ProfileComponent},
  {path:'profile/:username/view/:vusername',component:ViewProfileComponent},
  {path:'profile/:username/:detail',component:EditDetailsComponent},

  {path:'comments/:username/:id',component:CommentsComponent},
  {path:'detail/:username',component:DetailComponent},
  {path:'detail/:username/about/:id',component:AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
