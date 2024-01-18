import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Transaction, Report } from '../finance.model';
import { FinanceService } from '../finance-service.service'; 

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css'],
})
export class FinanceComponent {
  transactionForm: FormGroup;
  transactions: Transaction[] = [];
  report: Report;
  reportStartDate: Date;
  reportEndDate: Date;

  constructor(private fb: FormBuilder, private financeService: FinanceService) {
    this.transactionForm = this.fb.group({
      date: [null, Validators.required],
      category: ['', Validators.required],
      amount: [null, [Validators.required, Validators.pattern(/^-?\d*(\.\d+)?$/)]],
    });

    this.transactions = this.financeService.getTransactions();
    this.generateReport();
  }

  addTransaction(): void {
    const transaction: Transaction = this.transactionForm.value;
    this.financeService.addTransaction(transaction);
    this.transactions = this.financeService.getTransactions();
    this.generateReport();
    this.transactionForm.reset();
  }

  deleteTransaction(id: number): void {
    this.financeService.deleteTransaction(id);
    this.transactions = this.financeService.getTransactions();
    this.generateReport();
  }

  // isEditable(transactionDate: Date): boolean {
  //   const currentDate = new Date();
  //   const thirtyDaysAgo = new Date();
  //   thirtyDaysAgo.setDate(currentDate.getDate() - 30);
  //   return new Date(transactionDate) >= thirtyDaysAgo;
  // }

  generateReport(): void {
    this.report = this.financeService.generateReport(this.transactions);
  }
}






















// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-finance',
//   templateUrl: './finance.component.html',
//   styleUrls: ['./finance.component.css']
// })
// export class FinanceComponent {

// }
