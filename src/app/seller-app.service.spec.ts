import { TestBed } from '@angular/core/testing';

import { SellerAppService } from './seller-app.service';

describe('SellerAppService', () => {
  let service: SellerAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellerAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
