
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router,
    private toastr: ToastrModule, private toastr1: ToastrService) {
    sessionStorage.clear();
  }
  userData: any;
  filteredData: any;
  ngOnInit() { }

  loginForm = new FormGroup({
    "youremailaddress": new FormControl('', [Validators.email, Validators.required]),
    "yourpassword": new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)])
  })

login(){
  // debugger
  this.http.get<any>('http://localhost:3000/signupusers')
  .subscribe(
    (res)=>{
      console.log('res', res);      
    this.userData=res;
    const emailAdded = this.loginForm.value.youremailaddress;
    const emailPassword = this.loginForm.value.yourpassword;
    this.filteredData = this.userData.find((each:any)=> each.email == emailAdded);
    console.log('dataModify', this.filteredData);    
    if(this.filteredData.password == emailPassword){
      console.log('passcheck');      
      if(this.filteredData.isactive){
        console.log('active');        
        sessionStorage.setItem('youremailaddress',this.filteredData.email),
        sessionStorage.setItem('role',this.filteredData.role),
        this.router.navigate(['job-list']);
      }else{
        // console.log('false');        
          this.toastr1.error('Please contact to admin', 'Inactive user!!')
      }
    }else{
      this.toastr1.error('Invalid Credentials','Error!!');
    }
  },(err:any)=>{
    console.log(err,'err');
    
    alert(err);
  })
}

}
