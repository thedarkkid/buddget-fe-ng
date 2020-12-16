import { Injectable } from '@angular/core';
import Budget from '../models/Budget';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BudgetService {
  private uri = 'https://my-json-server.typicode.com/thedarkkid/mjs-buddget/';
  private  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  get(): Observable<Budget[]>{
    return this.http.get<Budget[]>(this._endpoint('budgets'));
  }

  create(budget: Budget): Observable<Budget> {
    return this.http.post<Budget>(this._endpoint('budgets'), budget, this.httpOptions);
  }

  update(budget: Budget): Observable<Budget> {
    return this.http.put<Budget>(this._endpoint(`budgets/${budget.id}`), budget, this.httpOptions);
  }

  delete(budget: Budget): Observable<Budget> {
    return this.http.delete<Budget>(this._endpoint(`budgets/${budget.id}`), this.httpOptions);
  }

  private _endpoint(endpoint: string): string {
    return this.uri + '/' + endpoint;
  }
}
