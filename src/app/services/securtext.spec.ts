import { TestBed } from '@angular/core/testing';

import { Securtext } from './securtext';

describe('Securtext', () => {
  let service: Securtext;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Securtext);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
