import {Directive, Input} from '@angular/core';

@Directive({
  selector: 'appHero'
})
export class HeroDirective {
  @Input()
  id: Number;

  @Input()
  name: String;


  constructor() { }

}
