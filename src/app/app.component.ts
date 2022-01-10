import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Search Pipe';
  searchText = '';
  characters: Employee[] = [
    {
      id: 1,
      name: 'AntMan',
    },
    {
      id: 2,
      name: 'Radhika',
    },
  ];
}
