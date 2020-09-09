import { TestBed } from '@angular/core/testing';

import { SpacexlpService } from './spacexlp.service';

describe('SpacexlpService', () => {
  let service: SpacexlpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpacexlpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
