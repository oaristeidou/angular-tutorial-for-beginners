import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveTabsComponent } from './directive-tabs.component';

describe('DirectiveTabsComponent', () => {
  let component: DirectiveTabsComponent;
  let fixture: ComponentFixture<DirectiveTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
