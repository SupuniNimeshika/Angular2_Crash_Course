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

  constructor() {
    this.name = 'Supuni Nimeshika';
    this.email = 'supuni.nimeshika@gmail.com';
    this.address ={
      No : '"Weerasewana"',
      Street: 'Lebeema',
      city: 'Kamburugamuwa'
    }
  }
}

 interface address{
  No:string;
  Street:string;
  city:string;
 }
