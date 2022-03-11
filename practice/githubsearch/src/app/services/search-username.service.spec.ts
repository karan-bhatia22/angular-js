import { TestBed } from '@angular/core/testing';

import { SearchUsernameService } from './search-username.service';

describe('SearchUsernameService', () => {
  let service: SearchUsernameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchUsernameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
