import { Component, OnInit, Input } from '@angular/core';
import Expenditure from 'src/app/models/Expenditure';

@Component({
  selector: 'app-expenditure-item',
  templateUrl: './expenditure-item.component.html',
  styleUrls: ['./expenditure-item.component.sass']
})
export class ExpenditureItemComponent implements OnInit {

  @Input() expenditure!: Expenditure;

  constructor() { }

  ngOnInit(): void {
  }

}
