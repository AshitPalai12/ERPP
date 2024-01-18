import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent  implements OnInit{
  managerForm!:FormGroup

  constructor(private fb:FormBuilder ,private toastr:ToastrService,private service:ApiService){
    

  }

  ngOnInit(){

    this.managerForm = this.fb.group({
      id:this.fb.control('',[Validators.required]),
      name:this.fb.control('',[Validators.required]),
      password:this.fb.control('', [Validators.required, Validators.minLength(6),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
      email:this.fb.control('',[Validators.required]),
      department:this.fb.control('',[Validators.required])
    })

  }
  

  loadManager(){
   if (this.managerForm.valid){
    this.service.postManager(this.managerForm.value).subscribe((res)=>{
      this.toastr.success(("Manager has been successfully registered"))
      this.managerForm.reset()
    })
   }
  }
  
  onEmptySubmit(){
    if(this.managerForm.invalid){
      this.toastr.error('Please enter the required fields!!')
    }
  }
}
``