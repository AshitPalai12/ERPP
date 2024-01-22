import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData:any
  id:any='';

  constructor(private builder: FormBuilder, private toastr: ToastrService,
    private service: ApiService, private router: Router, private http:HttpClient) { 
      sessionStorage.clear()
    }
  ngOnInit(): void {
    
  }
  loginForm = this.builder.group({
    empid: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
    role: this.builder.control('', Validators.required),
  })
  login(){
    if(this.loginForm.valid){
      this.service.getById(this.loginForm.value.empid).subscribe((res)=>{
        this.userData=res;

         this.id=this.userData.id;

        console.log(this.userData)
        if (this.userData.password===this.loginForm.value.password){
          
            sessionStorage.setItem("empid", this.userData.id)
            sessionStorage.setItem("role", this.userData.user_type)
            console.log(sessionStorage)
            // console.log(this.ss.url[0].path)
            this.service.Login()
            this.router.navigate(['/'])


            
          
          
        }
        else{
          this.toastr.error("Invalid Password")
        }
       })

    }
    else{
      this.toastr.error("Invalid Credentials")
    }

  }

  deleteEmployee(id:any){
    console.log(id,'id of the employeee  ');
    
  }
}
