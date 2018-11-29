import { TestBed } from '@angular/core/testing';

import { StarwarsData } from './starwars.data';

describe('StarwarsData', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StarwarsData = TestBed.get(StarwarsData);
    expect(service).toBeTruthy();
  });
});
