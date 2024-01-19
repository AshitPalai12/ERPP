import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private service: ApiService) { }

  // Determines whether the user is allowed to activate the route
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    // Check if the user is authenticated
    if (this.service.IsAuthenticated()) {
      return true; // User is authenticated, allow access
    } else {
      // User is not authenticated, redirect to the login page
      this.router.navigate(['/login']);
      return false; // Do not allow access
    }
  }
}
