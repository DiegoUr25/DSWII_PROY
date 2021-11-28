import { TestBed } from '@angular/core/testing';

import { PlatillosService } from './platillos.service';

describe('PlatillosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlatillosService = TestBed.get(PlatillosService);
    expect(service).toBeTruthy();
  });
});
