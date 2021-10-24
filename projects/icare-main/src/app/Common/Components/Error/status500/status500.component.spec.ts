import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Status500Component } from './status500.component';

describe('Status500Component', () => {
  let component: Status500Component;
  let fixture: ComponentFixture<Status500Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Status500Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Status500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});