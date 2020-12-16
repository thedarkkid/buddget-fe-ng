import { Component, OnInit, Input } from '@angular/core';
import Budget from 'src/app/models/Budget';

@Component({
  selector: 'app-budget-item',
  templateUrl: './budget-item.component.html',
  styleUrls: ['./budget-item.component.sass']
})
export class BudgetItemComponent implements OnInit {
  @Input() budget!: Budget;

  constructor() { }

  ngOnInit(): void {
  }

}
