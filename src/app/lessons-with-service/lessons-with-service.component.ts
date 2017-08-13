import { Component, OnInit } from '@angular/core';
import {lessonsData} from "../../lessons";

@Component({
  selector: 'app-lessons-with-service',
  templateUrl: './lessons-with-service.component.html',
  styleUrls: ['./lessons-with-service.component.css']
})
export class LessonsWithServiceComponent implements OnInit {

  lessons = lessonsData;

  constructor() { }

  ngOnInit() {
  }

}
