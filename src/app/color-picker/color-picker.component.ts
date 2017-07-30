import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BLUE, RED} from "../../constants";

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {

  @Input()
  color:string;

  @Output("color")
  colorOutput = new EventEmitter ();

  choose(color:string){
    this.color=color;
    this.colorOutput.emit(color);
  }

  reset (){
    this.choose('black');
  }

  constructor() { }

  ngOnInit() {
  }

}
