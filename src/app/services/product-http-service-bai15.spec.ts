import { TestBed } from '@angular/core/testing';
import { ProductHttpServiceBai15 } from './product-http-service-bai15';

describe('ProductHttpServiceBai15', () => {
  let service: ProductHttpServiceBai15;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductHttpServiceBai15);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
