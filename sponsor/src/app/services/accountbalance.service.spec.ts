import { TestBed } from '@angular/core/testing';

import { AccountbalanceService } from './accountbalance.service';

describe('AccountbalanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountbalanceService = TestBed.get(AccountbalanceService);
    expect(service).toBeTruthy();
  });
});
