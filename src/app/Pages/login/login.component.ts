import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
// import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Login:boolean=false
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router,private service:ApiService) {
    sessionStorage.clear();
  }
  userData: any;
  filteredData: any;
  public loginForm: FormGroup
  ngOnInit() { 
  
  this.loginForm = new FormGroup({
    "youremailaddress": new FormControl('', [Validators.email, Validators.required]),
    "yourpassword": new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
    "role": new FormControl('', [ Validators.required])
  })}

  login() {
    // debugger
    this.http.get<any>('http://localhost:3000/employers')
      .subscribe(res => {
          console.log('res', res);
          this.userData = res;
          const emailAdded = this.loginForm.value.youremailaddress;
          const emailPassword = this.loginForm.value.yourpassword;
          const role = this.loginForm.value.role;
          this.filteredData = this.userData.find((each: any) => each.email === emailAdded);
          console.log('dataModify', this.filteredData);
          if (this.filteredData.password === emailPassword && this.filteredData.user_type === role) {
            sessionStorage.setItem("role",this.userData.user_type)
            console.log('passcheck');
            this.service.Login()
            this.loginForm.reset();
            this.router.navigate(['/']);
           
          } else {
            alert('Invalid Email or Password');
          }
        }, error => {
          console.log(error, 'err');

          alert("Something went wrong!!");
        })
  }
}
 // if(this.filteredData.isactive){
            //   console.log('active');        
            //   sessionStorage.setItem('youremailaddress',this.filteredData.email),
            //   sessionStorage.setItem('role',this.filteredData.role),
            //   this.router.navigate(['job-list']);
            // }else{
            //   // console.log('false');        
            // }
