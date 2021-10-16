import { TestBed } from '@angular/core/testing';

import { TokeninterceptorService } from './token-interceptor.service';

describe('TokeinterceptorService', () => {
  let service: TokeninterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokeninterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
