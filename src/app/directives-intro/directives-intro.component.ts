import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-intro',
  templateUrl: './directives-intro.component.html',
  styleUrls: ['./directives-intro.component.css']
})
export class DirectivesIntroComponent implements OnInit {

  collapsed=false;

  onToggle(collapsed){
    console.log(collapsed);
  }

  constructor() { }

  ngOnInit() {
  }

}
