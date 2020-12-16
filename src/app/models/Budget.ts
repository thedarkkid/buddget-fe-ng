import Expenditure from './Expenditure';

export interface Allocation {
  amount: number;
  currency: string;
}

export default interface Budget{
  id: number;
  title: string;
  userId: number;
  allocation: Allocation;
  expenditures: Expenditure[];
}
