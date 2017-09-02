import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class LessonsService {

  lessons = [];

  constructor(private http: Http) {
    this.loadLessons();
  }

    loadLessons() {
    this.http.get('/lessons')
      .map(res => res.json())
      .subscribe(
        lessonsData => this.lessons = lessonsData
      );
  }

  createLesson(description) {
    console.log("creating lesson ...");
    const lesson = {description};
    this.lessons.push(lesson);

    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    headers.append('X-Requested-With', 'XMLHttpRequest');

    this.http.post('/lessons', JSON.stringify(lesson), headers)
      .subscribe(
        ()=>{},
        err => console.error(err)
      );

  }


}
