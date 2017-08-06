import {Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {HeroDirective} from '../hero.directive'

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

  @ContentChildren(HeroDirective)
  heroes : QueryList<HeroDirective>;

  get styles(){
    return {
      color:'blue',
      'text-decoration': 'underline'
    };
  }

  track(hero){
    return hero ? hero.id : undefined;
  }

  constructor() { }

  ngOnInit() {
  }

}
