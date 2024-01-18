import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manager-update',
  templateUrl: './manager-update.component.html',
  styleUrls: ['./manager-update.component.css']
})
export class ManagerUpdateComponent implements OnInit{
  
  constructor(private fb:FormBuilder ,private toastr:ToastrService,private service:ApiService,
    private route:ActivatedRoute){ }

    editData:any;
    public editManagerForm : FormGroup;

  // editManagerForm=new FormGroup({
  //   id: new FormControl<any>('',Validators.required),
  //   name: new FormControl<any>('',Validators.required),
  //   email: new FormControl<any>('',Validators.required),
  //   password: new FormControl<any>('',Validators.required),
  //   department: new FormControl<any>('',Validators.required),
  // })
  

  ngOnInit(): void {
    this.editManagerForm = this.fb.group({
      id: ['', Validators.required],
      // user_type: ['', Validators.required],
      name: ['', Validators.required],
      department: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]]
    })





    this.service.getManagerById(this.route.snapshot.params['id']).subscribe((res)=>{
      this.editData=res
      this.editManagerForm.setValue({id:this.editData.id,name:this.editData.name,email:this.editData.email,
        password:this.editData.password,department:this.editData.department,
     })
  })
  }
  UpdateManager(){
    this.service.updateManager(this.route.snapshot.params['id'],this.editManagerForm.value)
    .subscribe((res)=>{
      console.log(res);
     
    })
  }
}
