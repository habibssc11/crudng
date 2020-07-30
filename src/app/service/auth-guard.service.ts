import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private authService: AuthService, private router: Router ) { }

  canActivate(route: import('@angular/router').ActivatedRouteSnapshot, state: import('@angular/router').RouterStateSnapshot):boolean{

    console.log('route.routeConfig.path', route.routeConfig.path);

    if(route.routeConfig.path === 'logout' ){
      this.authService.logout();
      this.router.navigate(['/']);
    }
    if(this.authService.isUserloggedIn()){
      return true;
    }
    return false;
  }


}
