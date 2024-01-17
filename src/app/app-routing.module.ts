import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Pages/register/register.component';
import { HomeComponent } from './Pages/home/home.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { NotfoundComponent } from './Pages/notfound/notfound.component';
import { LoginComponent } from './Pages/login/login.component';
import { UserListComponent } from './Pages/container/user-list/user-list.component';
import { ManagerComponent } from './manager/manager.component';

const routes: Routes = [

  {path:'', component:HomeComponent, title:'Home'},
  {path:'home', component:HomeComponent, title:'Home'},
  {path:'contact', component:ContactComponent, title:'ContactUs'},
  {path:'login', component:LoginComponent, title:'Login'},
  {path:'register', component:RegisterComponent, title:'Register'},
  {path:'user', component:UserListComponent, title:'User'},
  {path:'manager', component:ManagerComponent, title:'Manager'},
  {path:'admin', component:UserListComponent, title:'Admin'},
  {path:'**', component:NotfoundComponent, title:'Error'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
