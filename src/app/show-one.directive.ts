import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appShowOne]'
})
export class ShowOneDirective {

  @Input()
  active =false;

  @Input("appShowOne")
  id: string;

  @HostBinding('hidden')
  get hidden (){
    return !this.active;
  }

  constructor() { }

}
