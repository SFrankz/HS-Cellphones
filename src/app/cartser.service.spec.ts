import { TestBed } from '@angular/core/testing';

import { CartserService } from './cartser.service';

describe('CartserService', () => {
  let service: CartserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
