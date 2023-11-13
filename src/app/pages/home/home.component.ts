import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  doctors = [1, 2, 3, 4, 5, 6, 7, 8]
  value = 'Dr Dre'
}
