import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-syntax-events',
  templateUrl: './template-syntax-events.component.html',
  styleUrls: ['./template-syntax-events.component.css'],
  exportAs:'vm'
})
export class TemplateSyntaxEventsComponent implements OnInit {

  inputValue='Text value';

  onClick (){
    alert("Hello Oddy!");
    debugger;
  }


  constructor() { }

  ngOnInit() {
  }

}
