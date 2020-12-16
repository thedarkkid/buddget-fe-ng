import { Component, OnInit } from '@angular/core';
import Budget from 'src/app/models/Budget';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.sass']
})
export class BudgetsComponent implements OnInit {
  budgets: Budget[] = [];

  constructor() { }

  ngOnInit(): void {
    this.budgets = [
      {
          "id": 1,
          "userId": 2,
          "title": "Test Budget 1",
          "allocation": {
              "amount": 1500,
              "currency": "USD"
          },
          "expenditures": [
              {
                  "id": 1,
                  "price": 200,
                  "currency":  "USD",
                  "title": "consectetur",
                  "description": "ciatis unde omnis iste natus error"
              },
              {
                  "id": 4,
                  "price": 8,
                  "currency":  "USD",
                  "title": "minima",
                  "description": "iure reprehenderit qui in ea voluptat"
              },
              {
                  "id": 6,
                  "price": 10,
                  "currency":  "USD",
                  "title": "commodi",
                  "description": "utem vel eum iure repreh"
              }
          ]
      },
      {
          "id": 2,
          "userId": 1,
          "title": "Monthly Budget",
          "allocation": {
              "amount": 800,
              "currency": "USD"
          },
          "expenditures": [
              {
                  "id": 2,
                  "price": 20,
                  "currency":  "USD",
                  "title": "enim",
                  "description": "tae dicta sunt explicabo. Nemo e"
              },
              {
                  "id": 3,
                  "price": 50,
                  "currency":  "USD",
                  "title": "laudantium",
                  "description": "ipsam voluptatem quia voluptas"
              },
              {
                  "id": 5,
                  "price": 80,
                  "currency":  "USD",
                  "title": "consequuntur",
                  "description": "atae vitae dicta sunt explicabo. Nemo enim ipsa"
              }
          ]
      },
      {
          "id": 3,
          "userId": 1,
          "title": "Christmas Party Budget",
          "allocation": {
              "amount": 500,
              "currency": "USD"
          },
          "expenditures": [
              {
                  "id": 7,
                  "price": 5,
                  "currency":  "USD",
                  "title": "auieunad",
                  "description": "olor sit amet, consectetur, adipis"
              }
          ]
      }
  ]
  }

}
