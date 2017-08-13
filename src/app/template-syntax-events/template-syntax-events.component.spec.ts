import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSyntaxEventsComponent } from './template-syntax-events.component';

describe('TemplateSyntaxEventsComponent', () => {
  let component: TemplateSyntaxEventsComponent;
  let fixture: ComponentFixture<TemplateSyntaxEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateSyntaxEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateSyntaxEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
