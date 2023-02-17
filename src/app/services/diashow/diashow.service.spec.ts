import { TestBed } from '@angular/core/testing';

import { DiashowService } from './diashow.service';

describe('DiashowService', () => {
  let service: DiashowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiashowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
