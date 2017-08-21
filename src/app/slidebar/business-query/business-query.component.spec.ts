import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessQueryComponent } from './business-query.component';

describe('BusinessQueryComponent', () => {
  let component: BusinessQueryComponent;
  let fixture: ComponentFixture<BusinessQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
