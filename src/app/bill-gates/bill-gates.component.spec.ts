import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillGatesComponent } from './bill-gates.component';

describe('BillGatesComponent', () => {
  let component: BillGatesComponent;
  let fixture: ComponentFixture<BillGatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BillGatesComponent]
    });
    fixture = TestBed.createComponent(BillGatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
