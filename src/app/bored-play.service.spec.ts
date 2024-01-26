import { TestBed } from '@angular/core/testing';

import { BoredPlayService } from './bored-play.service';

describe('BoredPlayService', () => {
  let service: BoredPlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoredPlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
