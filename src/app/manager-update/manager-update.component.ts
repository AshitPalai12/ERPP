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
    editData:any

  editManager=new FormGroup({
    id: new FormControl('',Validators.required),
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    department: new FormControl('',Validators.required),
  })

  ngOnInit(): void {
    this.service.getManagerById(this.route.snapshot.params['id']).subscribe((res)=>{
      this.editData=res
      this.editManager.setValue({id:this.editData.id,name:this.editData.name,email:this.editData.email,
        password:this.editData.password,department:this.editData.department,
     })
  })
  }
  updateManager(){
    this.service.updateManager(this.route.snapshot.params['id'],this.editManager.value)
    .subscribe((res)=>{
      console.log(res);
     
    })
  }
}
