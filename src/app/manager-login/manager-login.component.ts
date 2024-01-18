import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.css']
})
export class ManagerLoginComponent implements OnInit{
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
    "yourpassword": new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)])
  })}

  login() {
    // debugger
    this.http.get<any>('http://localhost:3000/managers')
      .subscribe(res => {
          console.log('res', res);
          this.userData = res;
          const emailAdded = this.loginForm.value.youremailaddress;
          const emailPassword = this.loginForm.value.yourpassword;
          this.filteredData = this.userData.find((each: any) => each.email === emailAdded);
          console.log('dataModify', this.filteredData);
          if (this.filteredData.password === emailPassword) {
            console.log('passcheck');
            this.service.Login()
            this.loginForm.reset();
            this.router.navigate(['/home']);
           
          } else {
            alert('Invalid Email or Password');
          }
        }, error => {
          console.log(error, 'err');

          alert("Something went wrong!!");
        })
  }
}
