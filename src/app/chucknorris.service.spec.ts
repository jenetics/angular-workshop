import { TestBed } from '@angular/core/testing';

import { ChucknorrisService } from './chucknorris.service';

describe('ChucknorrisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChucknorrisService = TestBed.get(ChucknorrisService);
    expect(service).toBeTruthy();
  });
});
