import { Component, OnInit } from '@angular/core';

const HEROES = [
  {id: 1, name: 'Superman'},
  {id: 2, name: 'Batman'},
  {id: 3, name: 'Batgirl'},
  {id: 4, name: 'Spiderman'},
  {id: 5, name: 'Robin'},
  {id: 6, name: 'Lego Batman'},

];

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }

}
