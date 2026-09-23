import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceProductHttp } from './service-product-http';

describe('ServiceProductHttp', () => {
  let component: ServiceProductHttp;
  let fixture: ComponentFixture<ServiceProductHttp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceProductHttp],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceProductHttp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
