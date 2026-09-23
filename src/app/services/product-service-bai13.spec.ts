import { TestBed } from '@angular/core/testing';
import { ProductServiceBai13 } from './product-service-bai13';

describe('ProductServiceBai13', () => {
  let service: ProductServiceBai13;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductServiceBai13);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
