import { TestBed } from '@angular/core/testing';

import { UserService.service } from './user.service';

describe('User', () => {
  let service: User.service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService.service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
