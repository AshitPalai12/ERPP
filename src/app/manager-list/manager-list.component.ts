import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.css']
})
export class ManagerListComponent implements OnInit{
  constructor(private service:ApiService){}
  managerList:any
  dataSource:any
  displayedColumns: string[] = ['name', 'department']
  displayManager(){
    this.service.getManager().subscribe((res)=>{
        this.managerList=res
        this.dataSource=new MatTableDataSource(this.managerList)

    })
  }
  ngOnInit(): void {
    this.displayManager()
  }
  applyFilter(event: any): void {
    const filterValue = (event.target && event.target.value) ? event.target.value : '';
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
