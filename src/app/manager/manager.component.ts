import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent {
  userForm!:FormGroup

  constructor(private fb:FormBuilder){
    

  }

  ngOnInit(){

    this.userForm = this.fb.group({
      username:[null,[Validators.required]],
      password:[null,[Validators.required]],
      role:[null,[Validators.required]],
      department:[null,[Validators.required]]
    })

  }

  onFormSubmit(){

  }
  
  onEmptySubmit(){
    if(this.userForm.invalid){
      alert('Please enter the required fields!!')
    }
  }
}
