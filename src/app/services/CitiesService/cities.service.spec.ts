import { TestBed } from '@angular/core/testing';

import { CitiesService } from './cities.service';

describe('CitiesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CitiesService = TestBed.get(CitiesService);
    expect(service).toBeTruthy();
  });
});
