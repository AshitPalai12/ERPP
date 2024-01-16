import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { NotfoundComponent } from './Pages/notfound/notfound.component';
import { NavbarComponent } from './Pages/navbar/navbar.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './Services/api.service';
import { AuthService } from './Services/auth.service';
import { UserService } from './Services/user.service';

import { ManagerComponent } from './manager/manager.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ContainerComponent } from './Pages/container/container.component';
import { UserListComponent } from './Pages/container/user-list/user-list.component';
import { UserDetailComponent } from './Pages/container/user-detail/user-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    NavbarComponent,

    ManagerComponent,
    ContainerComponent,
    UserListComponent,
    UserDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    BrowserAnimationsModule

  ],
  providers: [ApiService, AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
