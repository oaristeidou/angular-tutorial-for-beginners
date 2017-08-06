import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[appCollapseOnClick]',
  exportAs: 'collapsible'
})
export class CollapseOnClickDirective {

  @Input("collapsed")
  isCollapsed = false;

  @Output("collapsed")
  collapsedOutput = new EventEmitter ();

  @HostBinding("class.collapsed")
  get collapsed (){
    return this.isCollapsed;
  }

  @HostListener('click')
  toggle (){
    this.isCollapsed=!this.isCollapsed;
    this.collapsedOutput.emit(this.isCollapsed);
  }

}
