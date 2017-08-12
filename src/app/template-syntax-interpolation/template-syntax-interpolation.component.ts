import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-syntax-interpolation',
  templateUrl: './template-syntax-interpolation.component.html',
  styleUrls: ['./template-syntax-interpolation.component.css'],
  exportAs:'vm'
})
export class TemplateSyntaxInterpolationComponent implements OnInit {

  message='Hello Interpolation World!';

  condition=true;

  getValueString (){
    return 'Returned value!'
  }
  get valueString(){
    return 'Returned getter value!'
  }

  constructor() { }

  ngOnInit() {
  }

}
