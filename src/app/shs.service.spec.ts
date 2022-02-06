import { TestBed } from '@angular/core/testing';

import { ShsService } from './shs.service';

describe('ShsService', () => {
  let service: ShsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
