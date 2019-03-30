/*
    File name: auth.guard.ts (defining guard)
    Student name: Chandni Patel
    Student ID: 300990555
    Date: Febuary 30, 2019
*/

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }

  canActivate(): boolean {
    if(this.authService.LoggedIn()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

}
