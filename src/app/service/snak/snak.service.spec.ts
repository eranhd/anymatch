import { TestBed, inject } from '@angular/core/testing';

import { SnakService } from './snak.service';

describe('SnakService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SnakService]
    });
  });

  it('should be created', inject([SnakService], (service: SnakService) => {
    expect(service).toBeTruthy();
  }));
});
