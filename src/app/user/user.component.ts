import { Component, OnInit } from '@angular/core';
import {PostsService} from "../services/posts.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[PostsService]
})
export class UserComponent {

  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies:boolean;
  posts:Post[];

  constructor(private postsService: PostsService) {
    this.name = 'Supuni Nimeshika';
    this.email = 'supuni.nimeshika@gmail.com';
    this.address ={
      No : '"Weerasewana"',
      Street: 'Lebeema',
      city: 'Kamburugamuwa'
    }
    this.hobbies =['Music','Movies','Sports'];
    this.showHobbies = false;

    this.postsService.getPosts().subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    });
  }

  toggleHobbies(){
    if(this.showHobbies == true){
      this.showHobbies =false;
    }else {
      this.showHobbies =true;
    }
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.push(hobby);
  }

  deleteHobby(i){
    this.hobbies.splice(i,1);
  }
}

 interface address{
  No:string;
  Street:string;
  city:string;
 }

 interface Post{
  id: number;
  title: string;
  body: string;
 }
