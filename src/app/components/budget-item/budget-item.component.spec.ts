import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetItemComponent } from './budget-item.component';

describe('BudgetItemComponent', () => {
  let component: BudgetItemComponent;
  let fixture: ComponentFixture<BudgetItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
