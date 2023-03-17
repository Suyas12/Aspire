import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './compo/blogs/blogs.component';
import { LoginComponent } from './compo/login/login.component';
import { DashComponent } from './compo/dash/dash.component';
import { UserDashComponent } from './compo/user-dash/user-dash.component';
import { HomeComponent } from './compo/home/home.component';
import { AdminConComponent } from './compo/admin-con/admin-con.component';
// import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '' ,component:HomeComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'dash' , component: DashComponent},
  {path: 'blogs' , component: BlogsComponent},
  {path: 'user.dash' , component:UserDashComponent},
  {path: 'user.dash/:id' , component:UserDashComponent},
  {path: 'admin.con' , component:AdminConComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
