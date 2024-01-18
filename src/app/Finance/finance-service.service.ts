import { Injectable } from '@angular/core';
import { Transaction, Report } from './finance.model';

@Injectable({
  providedIn: 'root',
})
export class FinanceService {

  private transactions: Transaction[] = [];

  getTransactions(): Transaction[] {
    return this.transactions;
  }

  addTransaction(transaction: Transaction): void {
    transaction.id = this.transactions.length + 1;
    this.transactions.push(transaction);
  }

  deleteTransaction(id: number): void {
    this.transactions = this.transactions.filter((t) => t.id == id);
  }

  generateReport(transactions: Transaction[]): Report {
    const income = transactions
      .filter((t) => t.amount > 0)
      .reduce((sum, t) => sum + t.amount, 0);

    const expenses = transactions
      .filter((t) => t.amount < 0)
      .reduce((sum, t) => sum + t.amount, 0);

    const netBalance = income + expenses;

    return { income, expenses, netBalance };
  }
}















// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class FinanceServiceService {

//   constructor() { }
// }
