import { Component, OnInit } from '@angular/core';
import {lessonsData} from "../../lessons";
import {LessonsService} from "../lessons.service";
import {initObservable} from "../init-observable";

@Component({
  selector: 'app-lessons-with-service',
  templateUrl: './lessons-with-service.component.html',
  styleUrls: ['./lessons-with-service.component.css']
})
export class LessonsWithServiceComponent implements OnInit {

  constructor(public lessonsService: LessonsService) {
    initObservable();
    lessonsService.loadLessons();
  }

  ngOnInit() {
  }

}
