import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies:boolean;

  constructor() {
    this.name = 'Supuni Nimeshika';
    this.email = 'supuni.nimeshika@gmail.com';
    this.address ={
      No : '"Weerasewana"',
      Street: 'Lebeema',
      city: 'Kamburugamuwa'
    }
    this.hobbies =['Music','Movies','Sports'];
    this.showHobbies = false;
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
}

 interface address{
  No:string;
  Street:string;
  city:string;
 }
