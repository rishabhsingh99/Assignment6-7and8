import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbydeptComponent } from './viewbydept.component';

describe('ViewbydeptComponent', () => {
  let component: ViewbydeptComponent;
  let fixture: ComponentFixture<ViewbydeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbydeptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbydeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
