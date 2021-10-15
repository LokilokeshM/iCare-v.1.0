import { TestBed } from '@angular/core/testing';

import { IcareCommonService } from './icare-common.service';

describe('IcareCommonService', () => {
  let service: IcareCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IcareCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
