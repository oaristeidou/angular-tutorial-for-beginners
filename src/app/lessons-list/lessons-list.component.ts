import {Component, Input, OnInit} from '@angular/core';
import {lessonsData} from "../../lessons";

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit {

  @Input()
  lessons = [];

  constructor() { }

  ngOnInit() {
  }

}
