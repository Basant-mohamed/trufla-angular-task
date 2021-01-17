import { HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private services: BlogService , private router:Router) { }

  ngOnInit(): void {
  }

  login(f:any){
    const email = f.email
    const password = f.password
    this.services.login(email,password).subscribe((token:any)=>{
       localStorage.setItem('token' , token.token)
this.router.navigate(['/'])
  } ,(err)=>{ console.log(err)})
}
}
