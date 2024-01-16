import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Pages/register/register.component';
import { HomeComponent } from './Pages/home/home.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { NotfoundComponent } from './Pages/notfound/notfound.component';

const routes: Routes = [

  {path:'', component:HomeComponent, title:'Home'},
  {path:'home', component:HomeComponent, title:'Home'},
  {path:'contact', component:ContactComponent, title:'ContactUs'},
  {path:'login', component:ContactComponent, title:'Login'},
  {path:'register', component:ContactComponent, title:'Register'},
  {path:'admin', component:ContactComponent, title:'Admin'},
  {path:'user', component:ContactComponent, title:'User'},
  {path:'manager', component:ContactComponent, title:'Manager'},
  {path:'**', component:NotfoundComponent, title:'Error'},
  {path: 'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
