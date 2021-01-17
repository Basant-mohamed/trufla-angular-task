import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpRequest } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class BlogService {
  MY_API='http://localhost:3000/api/'

  constructor(private http:HttpClient) { }

  login(email :any , password :any){
    
   return this.http.post(this.MY_API+'login',{email,password})
  }

  getAllArtical(){
    return this.http.get(this.MY_API+'getAllArticals')
  }
  getArticalById(id:any){
    return this.http.get(this.MY_API+'getArticalById/'+id)
  }

  likeArtical(id :any){
   
    return this.http.post(this.MY_API+'addThumbsUp' , {id})
  }
  
  unLikeArtical(id : any)
  {
    
    return this.http.post(this.MY_API+'addThumbsDown' , {id})
  }

  getAllAuthor(){
       
    return this.http.get(this.MY_API+'getAllAuthors')
  }

  signUp(user :any){
    return this.http.post(this.MY_API+'addUser' , user)
  }
}
