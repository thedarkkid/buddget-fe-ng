import Expenditure from './Expenditure';

export interface Allocation {
  amount: number;
  currency: string;
}

export default class Budget{
  id!: any;
  title!: string;
  userId!: number;
  allocation!: Allocation;
  expenditures!: Expenditure[];
}
