import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Pages/register/register.component';
import { HomeComponent } from './Pages/home/home.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { NotfoundComponent } from './Pages/notfound/notfound.component';
import { LoginComponent } from './Pages/login/login.component';
import { UserListComponent } from './Pages/container/user-list/user-list.component';
import { ManagerComponent } from './manager/manager.component';
import { ManagerListComponent } from './manager-list/manager-list.component';
import { AboutComponent } from './Pages/about/about.component';
import { CreateProjectComponent } from './project/create-project/create-project.component';

const routes: Routes = [

  {path:'', component:HomeComponent, title:'Home'},
  {path:'home', component:HomeComponent, title:'Home'},
  {path:'about', component:AboutComponent, title:'About'},
  {path:'contact', component:ContactComponent, title:'ContactUs'},
  {path:'login', component:LoginComponent, title:'Login'},
  {path:'register', component:RegisterComponent, title:'Register'},
  {path:'user', component:UserListComponent, title:'User list'},
  {path:'manager', component:ManagerListComponent, title:'Manager list'},
  // {path:'admin', component:UserListComponent, title:'Admin'},
  {path:'manager-list', component:ManagerListComponent, title:'Manager-List'},
  {path: 'CreateProject',component:CreateProjectComponent, title:'Create Project'},
  {path:'**', component:NotfoundComponent, title:'Error'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
