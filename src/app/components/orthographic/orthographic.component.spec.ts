import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthographicComponent } from './orthographic.component';

describe('OrthographicComponent', () => {
  let component: OrthographicComponent;
  let fixture: ComponentFixture<OrthographicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrthographicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrthographicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
