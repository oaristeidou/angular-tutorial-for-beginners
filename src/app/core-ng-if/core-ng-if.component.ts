import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-core-ng-if',
  templateUrl: './core-ng-if.component.html',
  styleUrls: ['./core-ng-if.component.css']
})
export class CoreNgIfComponent implements OnInit {

  show = true;
  hidden = false;
  visibility = 'visible';

  toggleShow() {
    return this.show = !this.show;
  }

  toggleHidden() {
    return this.hidden = !this.hidden;
  }

  toggleVisible(){
    this.visibility =
      'visible' == this.visibility ? 'hidden':'visible';
  }

  constructor() {
  }

  ngOnInit() {
  }

}
