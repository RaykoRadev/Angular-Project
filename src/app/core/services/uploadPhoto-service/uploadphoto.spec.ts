import { TestBed } from '@angular/core/testing';

import { UploadPhoto } from './uploadphoto.service';

describe('Uploadphoto', () => {
  let service: UploadPhoto;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadPhoto);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
