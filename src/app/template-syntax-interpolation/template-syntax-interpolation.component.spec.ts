import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSyntaxInterpolationComponent } from './template-syntax-interpolation.component';

describe('TemplateSyntaxInterpolationComponent', () => {
  let component: TemplateSyntaxInterpolationComponent;
  let fixture: ComponentFixture<TemplateSyntaxInterpolationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateSyntaxInterpolationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateSyntaxInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
