import { TestBed } from '@angular/core/testing';

import { CrudFireBaseService } from './crud-fire-base.service';

describe('CrudFireBaseService', () => {
  let service: CrudFireBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudFireBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
