import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductService13 } from './product-service13';

describe('ProductService13', () => {
  let component: ProductService13;
  let fixture: ComponentFixture<ProductService13>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductService13],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductService13);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
