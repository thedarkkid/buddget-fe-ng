import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import Expenditure from 'src/app/models/Expenditure';

@Component({
  selector: 'app-expenditure-item',
  templateUrl: './expenditure-item.component.html',
  styleUrls: ['./expenditure-item.component.sass']
})
export class ExpenditureItemComponent implements OnInit {

  @Output() removeExpenditureEvent: EventEmitter<Expenditure> = new EventEmitter<Expenditure>();
  @Input() expenditure!: Expenditure;

  constructor() { }

  ngOnInit(): void {
  }

  removeExpenditure(expenditure: Expenditure): void{
    this.removeExpenditureEvent.emit(expenditure);
  }
}
