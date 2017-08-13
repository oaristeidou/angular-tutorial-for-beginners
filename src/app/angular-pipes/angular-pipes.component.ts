import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-pipes',
  templateUrl: './angular-pipes.component.html',
  styleUrls: ['./angular-pipes.component.css']
})
export class AngularPipesComponent implements OnInit {

  message = 'Hello Angular!';

  date = new Date();

  pi = 3.14159265359;

  percentage = 0.123;

  amount = 12.223;

  data = ['A', 'B', 'C', 'S'];

  constructor() { }

  ngOnInit() {
  }

}
