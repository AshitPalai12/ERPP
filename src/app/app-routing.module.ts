import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { NotfoundComponent } from './Pages/notfound/notfound.component';

const routes: Routes = [

  {path:'', component:HomeComponent, title:'Home'},
  {path:'home', component:HomeComponent, title:'Home'},
  {path:'contact', component:ContactComponent, title:'ContactUs'},
  {path:'**', component:NotfoundComponent, title:'Error'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
