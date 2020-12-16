import { Component, OnInit } from '@angular/core';
import Budget from 'src/app/models/Budget';
import {BudgetService} from '../../services/budget.service';
import Expenditure from '../../models/Expenditure';
import { v4 as uuidv4 } from 'uuid';
import {$} from 'protractor';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.sass']
})
export class BudgetsComponent implements OnInit {
  budgets: Budget[] = [];

  count = 3;
  defaultBudget: Budget = {
    id: ++this.count,
    userId: 1,
    title: '',
    allocation: {
      amount: 0,
      currency: 'USD'
    },
    expenditures: []
  };
  newBudget: Budget = Object.assign(this.defaultBudget);
  alert = '';
  showSpinner = false;

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

  addBudget(): void{
    this.showSpinner = true;
    this.alert = '';
    this.budgetService.create(this.newBudget).subscribe( returnedBudget => {
      this.budgets.push(returnedBudget);
      this.alert = 'New Budget Added Successfully.';
    });
    this.showSpinner = false;
  }

  resetForm(): void{
    this.newBudget = {
      id: ++this.count,
      userId: 1,
      title: '',
      allocation: {
        amount: 0,
        currency: 'USD'
      },
      expenditures: []
    };
    this.clearAlert();
  }

  clearAlert(): void{
    this.alert = '';
  }
}
