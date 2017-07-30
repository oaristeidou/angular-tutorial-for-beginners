import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-color-previewer',
  templateUrl: './color-previewer.component.html',
  styleUrls: ['./color-previewer.component.css']
})
export class ColorPreviewerComponent implements OnInit {

  @Input()
  color:string;

  constructor() { }

  ngOnInit() {
  }

}
