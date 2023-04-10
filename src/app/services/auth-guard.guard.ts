import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../compo/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(

    private api: AuthService,
    private router: Router) { }
  canActivate() {
    if (this.api.isLoginUser())
      return true;
    else
      this.router.navigate(['/login']);
    return false;
  }

}
