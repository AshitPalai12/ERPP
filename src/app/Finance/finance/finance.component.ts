import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FinanceService } from '../finance-service.service'; 
import { Transaction } from '../finance.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css'],
})
export class FinanceComponent implements OnInit {

  formValue : FormGroup;
  transactionModelObj: Transaction = new Transaction();
  // Bldel:any = new User();
  transactionData : any;
  showAdd : boolean;
  showUpdate : boolean;

  constructor(private formbuilder: FormBuilder, private fService: FinanceService, private router : Router, private toastr: ToastrService) {}
  
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({        //initializing the form, formbuilder will group
      id: ['',Validators.required],
      title : ['',Validators.required],
      date : ['',Validators.required],
      category : ['',Validators.required],
      amount : ['',Validators.required]
    })
    this.getAllTransaction();
  }

  clickAddTransaction(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postTransactionDetails(){
    // this.transactionModelObj.id = this.formValue.value.id;
    this.transactionModelObj.title = this.formValue.value.title;
    this.transactionModelObj.date = this.formValue.value.date;
    this.transactionModelObj.category = this.formValue.value.category;
    this.transactionModelObj.amount = this.formValue.value.amount;

    this.fService.postTransaction(this.transactionModelObj)
    .subscribe(res=>{
      // console.log("Successfully added the details");
      console.log(res);
      this.toastr.success("Transaction added successfully")
      let ref = document.getElementById('close')
      ref?.click();
      this.formValue.reset();
      this.getAllTransaction();
    },
    err=>{
      this.toastr.error("Something went wrong");
      console.error(err)
    })
  }
  getAllTransaction(){
    this.fService.getTransaction()
    .subscribe(res=>{
      this.transactionData = res;
    })
  }
  deleteTransaction(row: any){
    debugger
    this.fService.deleteTransaction(row.id)
    .subscribe(res=>{
      this.toastr.success("Deleted Successfully");
      this.getAllTransaction();
    })
  }
  onEdit(ro: any){
    this.showAdd = false;
    this.showUpdate = true;
    this.transactionModelObj.id = ro.id;
    console.log(ro.id)
    this.formValue.controls['title'].setValue(ro.title);
    this.formValue.controls['date'].setValue(ro.date);
    this.formValue.controls['category'].setValue(ro.category);
    this.formValue.controls['amount'].setValue(ro.amount);
  }
  updateTransactionDetails(){
    this.transactionModelObj.title = this.formValue.value.title;
    this.transactionModelObj.date = this.formValue.value.date;
    this.transactionModelObj.category = this.formValue.value.category;
    this.transactionModelObj.amount = this.formValue.value.amount;

    this.fService.updateTransaction(this.transactionModelObj,this.transactionModelObj.id)
    .subscribe(res=>{
      this.toastr.success("Updated Successfully");
      let ref = document.getElementById('close')   // Attempts to get a reference to an HTML element with the id 'close'. The variable ref will be null if no such element is found.
      ref?.click();   // If the reference ref is not null (i.e., the element with id 'close' was found), this line triggers a click event on that element.
      this.formValue.reset();
      this.getAllTransaction();
    })
  }
}














































// transactionForm: FormGroup;
// transactions: Transaction[] = [];
// report: Report;
// reportStartDate: Date;
// reportEndDate: Date;

// constructor(private fb: FormBuilder, private financeService: FinanceService) {
//   this.transactionForm = this.fb.group({
//     date: [null, Validators.required],
//     category: ['', Validators.required],
//     amount: [null, [Validators.required, Validators.pattern(/^-?\d*(\.\d+)?$/)]],
//   });

//   this.transactions = this.financeService.getTransactions();
//   this.generateReport();
// }

// addTransaction(): void {
//   const transaction: Transaction = this.transactionForm.value;
//   this.financeService.addTransaction(transaction);
//   this.transactions = this.financeService.getTransactions();
//   this.generateReport();
//   this.transactionForm.reset();
// }

// deleteTransaction(id: number): void {
//   this.financeService.deleteTransaction(id);
//   this.transactions = this.financeService.getTransactions();
//   this.generateReport();
// }

// // isEditable(transactionDate: Date): boolean {
// //   const currentDate = new Date();
// //   const thirtyDaysAgo = new Date();
// //   thirtyDaysAgo.setDate(currentDate.getDate() - 30);
// //   return new Date(transactionDate) >= thirtyDaysAgo;
// // }

// generateReport(): void {
//   this.report = this.financeService.generateReport(this.transactions);
// }






















// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-finance',
//   templateUrl: './finance.component.html',
//   styleUrls: ['./finance.component.css']
// })
// export class FinanceComponent {

// }
