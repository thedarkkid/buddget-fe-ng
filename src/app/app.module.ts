import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetsComponent } from './components/budgets/budgets.component';
import { BudgetItemComponent } from './components/budget-item/budget-item.component';
import { ExpenditureItemComponent } from './components/expenditure-item/expenditure-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetsComponent,
    BudgetItemComponent,
    ExpenditureItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
