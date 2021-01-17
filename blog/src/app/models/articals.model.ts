import { Author } from "./author.model";

export interface Artical{

    _id: string ,
    title : string ,
    body : string,
    date : Date ,
    likes : number,
    author : Author 
}