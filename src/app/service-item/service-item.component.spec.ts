import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceItemComponent } from './service-item.component';

describe('ServiceItemComponent', () => {
  let component: ServiceItemComponent;
  let fixture: ComponentFixture<ServiceItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
