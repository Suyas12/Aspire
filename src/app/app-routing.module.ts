import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './compo/login/login.component';
import { DashComponent } from './compo/dash/dash.component';
import { UserDashComponent } from './compo/user-dash/user-dash.component';
import { HomeComponent } from './compo/home/home.component';
import { AdminConComponent } from './compo/admin-con/admin-con.component';
import { AuthGuardGuard } from './services/auth-guard.guard';
// import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '' ,component:HomeComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'dash' , component: DashComponent, canActivate: [AuthGuardGuard]},
  {path: 'user.dash' , component:UserDashComponent, canActivate: [AuthGuardGuard]},
  {path: 'admin.con' , component:AdminConComponent, canActivate: [AuthGuardGuard]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardGuard]
})
export class AppRoutingModule { }
