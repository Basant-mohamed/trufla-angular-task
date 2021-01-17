import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule }   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticalsComponent } from './components/articals/articals.component';
import { HomeComponent } from './components/home/home.component';
import { AuthorComponent } from './components/author/author.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { from } from 'rxjs';
import { AddArticalComponent } from './components/add-artical/add-artical.component';
import { AddAuthorComponent } from './components/add-author/add-author.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticalsComponent,
    HomeComponent,
    AuthorComponent,
    ContactUsComponent,
    LoginComponent,
    SignUpComponent,
    AddArticalComponent,
    AddAuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
