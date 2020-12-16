import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

import Budget from 'src/app/models/Budget';
import Expenditure from '../../models/Expenditure';
import {BudgetService} from '../../services/budget.service';

@Component({
  selector: 'app-budget-item',
  templateUrl: './budget-item.component.html',
  styleUrls: ['./budget-item.component.sass']
})
export class BudgetItemComponent implements OnInit {
  @Output() removeBudgetEvent: EventEmitter<Budget> = new EventEmitter<Budget>();
  @Input() budget!: Budget;

  title!: string;
  amount!: number;
  currency = 'USD';
  description!: string;


  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
  }

  addExpenditureToBudget(): void{
    const newExpenditure: Expenditure = {
      id: uuidv4(),
      title: this.title,
      price: this.amount,
      currency: this.currency,
      description: this.description
    };
    const newBudget = this.budget;
    newBudget.expenditures.push(newExpenditure);
    this.budgetService.update(newBudget).subscribe( returnedBudget => {
      this.budget = returnedBudget;
      this.clearForm();
    });
  }

  removeBudget(budget: Budget): void {
    this.removeBudgetEvent.emit(budget);
  }

  removeExpenditureFromBudget(expenditure: Expenditure): void {
    const newBudget: Budget = this.budget;
    newBudget.expenditures = this.budget.expenditures.filter( (exp) => exp.id !== expenditure.id );

    this.budgetService.update(newBudget).subscribe( budget => {
      this.budget = budget;
    });
  }

  clearForm(): void{
    this.title = '';
    this.amount = 0;
    this.currency = 'USD';
    this.description = '';
  }
}
