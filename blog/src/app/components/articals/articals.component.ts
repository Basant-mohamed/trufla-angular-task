import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artical } from 'src/app/models/articals.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-articals',
  templateUrl: './articals.component.html',
  styleUrls: ['./articals.component.css']
})
export class ArticalsComponent implements OnInit {

  articalArr : Artical[]=[]
  disableUnLikes :boolean =  false
  disableLikes :boolean = false

  constructor(private services:BlogService , private router:Router) { }

  ngOnInit(): void {
    this.services.getAllArtical().subscribe((art:any)=>{
      this.articalArr = art
    })
  }

  likeMe(id :any){

  this.services.likeArtical(id).subscribe((flag:any)=>{
    if(flag.flag == 1){
      this.disableLikes = true
      this.disableUnLikes = false
    } 
  })
  }

  
  unLikeMe(id:any){
    this.services.unLikeArtical(id).subscribe((flag:any)=>{
      if(flag.flag == 1) 
      {
        this.disableLikes = false
        this.disableUnLikes = true
      } 
    })

  }
}
