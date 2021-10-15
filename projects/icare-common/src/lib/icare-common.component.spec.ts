import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcareCommonComponent } from './icare-common.component';

describe('IcareCommonComponent', () => {
  let component: IcareCommonComponent;
  let fixture: ComponentFixture<IcareCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcareCommonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcareCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
