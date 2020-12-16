import { Component, OnInit } from '@angular/core';
import Budget from 'src/app/models/Budget';
import {BudgetService} from '../../services/budget.service';
import Expenditure from '../../models/Expenditure';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.sass']
})
export class BudgetsComponent implements OnInit {
  budgets: Budget[] = [];

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.budgetService.get().subscribe( budgets => {
      this.budgets = budgets;
    });
  }

  removeBudget(budget: Budget): void{
    this.budgetService.delete(budget).subscribe( deletedBudget => {
      this.budgets = this.budgets.filter( currentBudget => currentBudget.id !== budget.id);
    } );
  }

}
