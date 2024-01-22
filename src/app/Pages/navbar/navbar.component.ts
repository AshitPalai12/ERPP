import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  id:any='';

  constructor(private api: ApiService, private router: Router) { }

  //navigate the authenticated user to the login page on logout
  logout() {
    this.api.Logout();
    this.router.navigate(["/login"])
  }

  //delete the employee on request of the employee
  deleteEmp(){
    const userResponse = window.confirm('Do you want to delete the account?')
    console.log(userResponse);
    if(userResponse){
      this.id = sessionStorage.getItem('empid');
      console.log(this.id);
      this.api.deleteEmployee(this.id)
      this.router.navigate(["/register"])
    }
    else{
      return;
    }
  }

}
