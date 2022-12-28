import { TestBed } from '@angular/core/testing';

import { EmploitServiceService } from './emploit-service.service';

describe('EmploitServiceService', () => {
  let service: EmploitServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmploitServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
