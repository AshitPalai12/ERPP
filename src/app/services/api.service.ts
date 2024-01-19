import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  postUser (data: any){
    return this.http.post<any>('http://localhost:3000/users', data)
  }
  getUser(){
    return this.http.get<any>('http://localhost:3000/users')
  }
  updateUser(id: any, data: any){
    return this.http.put<any>('http://localhost:3000/users/'+id, data)
  }
  deleteUser(id: any){
    return this.http.delete<any>('http://localhost:3000/users/'+id)
  }

  getUserById(id:any): Observable<any>{
    return this.http.get<any>('http://localhost:3000/users/'+id)
  }

  postAdmin (data: any){
    return this.http.post<any>('http://localhost:3000/admin', data)
  }
  getAdmin(){
    return this.http.get<any>('http://localhost:3000/admin')
  }
  updateAdmin(id: number, data: any){
    return this.http.put<any>('http://localhost:3000/admin/'+id, data)
  }
  deleteAdmin(id: number){
    return this.http.delete<any>('http://localhost:3000/admin/'+id)
  }

  postManager (data: any){
    return this.http.post<any>('http://localhost:3000/managers', data)
  }
  getManager(){
    return this.http.get<any>('http://localhost:3000/managers')
  }
  getManagerById(id:any){
    return this.http.get<any>('http://localhost:3000/managers/'+id)
  }
  updateManager(id: number, data: any){
    return this.http.put<any>('http://localhost:3000/managers/'+id, data)
  }
  deleteManager(id: number){
    return this.http.delete<any>('http://localhost:3000/managers/'+id)
  }


  // auth for login logout
  
  loggedIn : boolean =false;

  Login(){
    this.loggedIn = true;
  }

  Logout(){
    this.loggedIn = false;
  }

  IsAuthenticated(){
    return this.loggedIn;
  }
  getUserRole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():''
  }
}
