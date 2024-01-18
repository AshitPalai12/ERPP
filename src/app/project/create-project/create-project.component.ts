import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Project } from 'src/app/Pages/model/Project';
import { ApiService } from 'src/app/services/api.service';
 
@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent {
  projectForm!: FormGroup
  projects: Project[] = [];
 
  isCreating: boolean = false;
 
  isEditMode: boolean = false;
 
  currentId: any = '';
 
 
  constructor(private fb: FormBuilder, private apiService: ApiService, private toastr: ToastrService) { }
 
  dataSource: any;
  displayedColumns: any[] = ['projectid', 'name', 'deadline', 'manager', 'actions'];
 
  ngOnInit(): void {
    // Initialize the form group and set up validators
    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      deadline: ['', Validators.required],
      department: ['', Validators.required],
      manager: ['', Validators.required],
      teams: ['', Validators.required]
    });
 
    this.fetchProject();
  }
 
  PProjectForm(){
    this.isCreating = !this.isCreating;
    if (!this.isCreating) {
      this.projectForm.reset();
 
    }
 
  }
 
  onFormSubmit(){
    console.log('hello')
    if (!this.isEditMode) {
      console.log('hello post method')
      console.log(this.projectForm)
 
 
      this.apiService.postAdmin(this.projectForm.value).subscribe((res) => {
        console.log(res);
       
        this.toastr.success("Project has been successfully posted")
        this.isCreating = false;
        this.fetchProject();
        this.projectForm.reset();
      })
 
    }
    else {
 
      this.apiService.updateAdmin(this.currentId, this.projectForm.value).subscribe((res) => {
        this.toastr.success("Project has been successfully updated")
 
        this.isEditMode = false;
        this.isCreating = false;
        this.fetchProject();
        this.projectForm.reset();
      })
    }
 
 
  }
 
  //get the project
onProjectfetch(){
  this.fetchProject();
}
  private fetchProject(){
  this.apiService.getAdmin().subscribe((res) => {
    console.log(res);
    this.projects = res;
    this.dataSource = new MatTableDataSource(this.projects)
    this.toastr.success("Project has been successfully fetched")
  })
}
 
//update the project
editProject(id: any){
 
  this.currentId=id;
 
  this.isCreating=true;
 
  let currentproject = this.projects.find((p)=>{return p.id === id})
 
  this.projectForm.setValue({
    name: currentproject.name,
    description: currentproject.description,
    deadline: currentproject.deadline,
    department: currentproject.department,
    manager: currentproject.manager,
    teams: currentproject.teams
  })
 
 
 
  this.isEditMode=true;
 
 
}
 
//delete the project
deleteProject(id){
 
  const projectResponse = window.confirm("Do you want delete this project?")
  if (projectResponse) {
 
    this.apiService.deleteAdmin(id).subscribe(() => {
      this.fetchProject();
      this.toastr.success("Project has been successfully deleted")
    })
  }
  else {
    return
  }
 
}
 
 
applyFilter(event: any): void {
  const filterValue = (event.target && event.target.value) ? event.target.value : '';
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
 
}