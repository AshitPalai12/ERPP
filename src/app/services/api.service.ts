import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postEmployerByRole (data: any){
    return this.http.post<any>('http://localhost:3000/employers', data)
  }
  getEmployerByRole(){
    return this.http.get<any>('http://localhost:3000/employers')
  }
  updateEmployerByRole(id: number, data: any){
    return this.http.put<any>('http://localhost:3000/employers/'+id, data)
  }
  deleteEmployerByRole(id: number){
    return this.http.delete<any>('http://localhost:3000/employers/'+id)
  }
}
