import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name = 'Supuni Nimeshika';
  email = 'supuni.nimeshika@gmail.com';

  address = {
    No : '"Weerasewana"',
    Street: 'Lebeema',
    city: 'Kamburugamuwa'
  }
}
