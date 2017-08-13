import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsWithServiceComponent } from './lessons-with-service.component';

describe('LessonsWithServiceComponent', () => {
  let component: LessonsWithServiceComponent;
  let fixture: ComponentFixture<LessonsWithServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonsWithServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonsWithServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
