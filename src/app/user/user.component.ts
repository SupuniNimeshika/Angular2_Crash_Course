import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  title = 'app';
  name = 'Supuni Nimeshika';
  email = 'supuni.nimeshika@gmail.com';

  address = {
    No : '"Weerasewana"',
    Street: 'Lebeema',
    city: 'Kamburugamuwa'
  }
  constructor() { }

  ngOnInit() {
  }

}
