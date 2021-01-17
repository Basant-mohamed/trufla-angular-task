import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authorArr : Author[]=[]
  constructor(private service:BlogService) { }


  ngOnInit(): void {

    this.service.getAllAuthor().subscribe((auth:any)=>{
      this.authorArr = auth

    })
  }

}
