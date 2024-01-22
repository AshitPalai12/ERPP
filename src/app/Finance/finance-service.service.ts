import { Injectable } from '@angular/core';
// import { Transaction } from './finance.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FinanceService {

  constructor(private http: HttpClient) { }

  postTransaction (data: any){
    return this.http.post<any>("https://erpp-api.onrender.com/transactions", data)
  }
  getTransaction (){
    return this.http.get<any>("https://erpp-api.onrender.com/transactions")
  }
  updateTransaction(data: any, id: number){
    return this.http.put<any>("https://erpp-api.onrender.com/transactions/"+id, data)
  }
  deleteTransaction(id:number){
    return this.http.delete<any>("https://erpp-api.onrender.com/transactions/"+id)
  }
}















// private transactions: Transaction[] = [];

// getTransactions(): Transaction[] {
//   return this.transactions;
// }

// addTransaction(transaction: Transaction): void {
//   transaction.id = this.transactions.length + 1;
//   this.transactions.push(transaction);
// }

// deleteTransaction(id: number): void {
//   this.transactions = this.transactions.filter((t) => t.id == id);
// }

// generateReport(transactions: Transaction[]): Report {
//   const income = transactions
//     .filter((t) => t.amount > 0)
//     .reduce((sum, t) => sum + t.amount, 0);

//   const expenses = transactions
//     .filter((t) => t.amount < 0)
//     .reduce((sum, t) => sum + t.amount, 0);

//   const netBalance = income + expenses;

//   return { income, expenses, netBalance };
// }














// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class FinanceServiceService {

//   constructor() { }
// }
