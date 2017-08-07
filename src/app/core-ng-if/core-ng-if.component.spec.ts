import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreNgIfComponent } from './core-ng-if.component';

describe('CoreNgIfComponent', () => {
  let component: CoreNgIfComponent;
  let fixture: ComponentFixture<CoreNgIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreNgIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
