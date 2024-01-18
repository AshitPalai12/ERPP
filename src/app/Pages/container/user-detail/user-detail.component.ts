import { Component, OnInit } from '@angular/core';
import { User } from '../../model/userInter';
import { ApiService } from 'src/app/services/api.service';
import { HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  selectedUser:any;

  constructor(private _apiservice:ApiService,private activatedRoute:ActivatedRoute){}

  ngOnInit(){
    this.activatedRoute.params.subscribe((params)=>{
      let id = params['id']
      this._apiservice.getUserById(id).subscribe((data)=>{
        console.log(data);
        this.selectedUser= data;
        console.log(this.selectedUser);
      })
      // console.log(params);
    })
  }

  




}
