import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'MyCV';
  name: string = "Jonathan J. Pyrak";
  address: string = "7921 Black Hawk Court";
  cityState: string = "West Chester, OH 45069";
  phone: string = "513-289-5619";
  email: string = "jonathanpyrak@gmail.com";
  displayEducation: boolean = true;

  favColors: string[] = [
    "teal",
    "violet",
    "silver"
  ];
}
