import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Flag indicating whether the user is logged in
  Login: boolean = false;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private service: ApiService) {
    // Clear session storage when the component is initialized
    sessionStorage.clear();
  }

  userData: any;
  filteredData: any;
  public loginForm: FormGroup;

  ngOnInit() {
    // Initialize the login form with email and password controls and validators
    this.loginForm = new FormGroup({
      "youremailaddress": new FormControl('', [Validators.email, Validators.required]),
      "yourpassword": new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)])
    });
  }

  /**
   * Attempts to log in the user by sending a request to the server with provided credentials.
   */
  login() {
    // Send an HTTP GET request to the server to fetch user data
    this.http.get<any>('http://localhost:3000/employers')
      .subscribe(res => {
        // Log the response
        console.log('res', res);

        // Assign the response to the userData variable
        this.userData = res;

        // Extract email and password from the login form
        const emailAdded = this.loginForm.value.youremailaddress;
        const emailPassword = this.loginForm.value.yourpassword;

        // Find a user in userData with matching email
        this.filteredData = this.userData.find((each: any) => each.email === emailAdded);

        // Check if the password matches the user's password
        if (this.filteredData.password === emailPassword) {
          console.log('passcheck');

          // Set the Login flag to true
          this.service.Login();

          // Reset the login form
          this.loginForm.reset();

          // Navigate to the 'home' route
          this.router.navigate(['/home']);

        } else {
          // Show an alert for invalid email or password
          alert('Invalid Email or Password');
        }
      }, error => {
        // Log any error and show an alert
        console.log(error, 'err');
        alert("Something went wrong!!");
      });
  }
}
