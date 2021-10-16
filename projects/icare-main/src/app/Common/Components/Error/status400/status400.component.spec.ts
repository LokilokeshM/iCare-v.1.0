import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Status400Component } from './status400.component';

describe('Status400Component', () => {
  let component: Status400Component;
  let fixture: ComponentFixture<Status400Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Status400Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Status400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
