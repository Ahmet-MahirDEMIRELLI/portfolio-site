import { TestBed } from '@angular/core/testing';

import { LangugageService } from './langugage.service';

describe('LangugageService', () => {
  let service: LangugageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LangugageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
