import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './compo/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './compo/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { DashComponent } from './compo/dash/dash.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogsComponent } from './compo/blogs/blogs.component';
import { UserDashComponent } from './compo/user-dash/user-dash.component';
import { HomeComponent } from './compo/home/home.component';
import { AdminConComponent } from './compo/admin-con/admin-con.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { UserDashModule } from './compo/user-dash/user-dash.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DashComponent,
    BlogsComponent,
    UserDashComponent,
    HomeComponent,
    AdminConComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    NgxPaginationModule,
    UserDashModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
