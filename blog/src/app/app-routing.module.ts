import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddArticalComponent } from './components/add-artical/add-artical.component';
import { AddAuthorComponent } from './components/add-author/add-author.component';
import { ArticalsComponent } from './components/articals/articals.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
/*   {path: '', redirectTo: 'home', pathMatch: 'full'},  */
  {path: '', component: HomeComponent},
  {path : 'articals' , component:ArticalsComponent},
  {path :'login' , component:LoginComponent},
  {path :'signUp' , component:SignUpComponent},
  {path :'addArtical' ,component:AddArticalComponent},
  {path :'addAuthor' ,component:AddAuthorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
