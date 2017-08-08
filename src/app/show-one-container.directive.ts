import {ContentChildren, Directive, QueryList} from '@angular/core';
import {ShowOneTriggerDirective} from "./show-one-trigger.directive";
import {ShowOneDirective} from "./show-one.directive";

@Directive({
  selector: '[appShowOneContainer]'
})
export class ShowOneContainerDirective {

  triggers: ShowOneTriggerDirective[]=[];

  @ContentChildren(ShowOneDirective)
  items: QueryList<ShowOneDirective>;

  constructor() { }

  add(showOneTriggerDirective: ShowOneTriggerDirective) {
    this.triggers.push(showOneTriggerDirective);
  }

  show(id: string) {
    this.items.forEach(
      item => item.active = item.id==id
    );
    this.triggers.forEach(
      trigger => trigger.active = trigger.id==id
    );
  }
}
