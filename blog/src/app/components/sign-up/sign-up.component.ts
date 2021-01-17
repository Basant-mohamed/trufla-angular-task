import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private services:BlogService , private router:Router) { }

  ngOnInit(): void {
  }

  signUp(data:any){
this.services.signUp(data).subscribe((user)=>{
if(user) this.router.navigate(['/'])

})
  }
}
