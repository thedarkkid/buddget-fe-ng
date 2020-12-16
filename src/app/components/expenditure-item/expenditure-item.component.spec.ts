import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenditureItemComponent } from './expenditure-item.component';

describe('ExpenditureItemComponent', () => {
  let component: ExpenditureItemComponent;
  let fixture: ComponentFixture<ExpenditureItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenditureItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenditureItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
