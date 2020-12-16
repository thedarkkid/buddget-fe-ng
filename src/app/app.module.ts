import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetsComponent } from './components/budgets/budgets.component';
import { BudgetItemComponent } from './components/budget-item/budget-item.component';
import { ExpenditureItemComponent } from './components/expenditure-item/expenditure-item.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BudgetsComponent,
    BudgetItemComponent,
    ExpenditureItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
