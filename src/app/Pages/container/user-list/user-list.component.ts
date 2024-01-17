import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userForm!: FormGroup

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      role: [null, [Validators.required]],
      department: [null, [Validators.required]]
    })

  }

  onFormSubmit() {
  }

  onEmptySubmit() {
    if (this.userForm.invalid) {
      alert('Please enter the required fields!!')
    }
  }

}
