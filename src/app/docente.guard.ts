import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppComponent } from './app.component';
import { GuardService } from './guard.service';

@Injectable({
  providedIn: 'root'
})
export class DocenteGuard implements CanActivate {
  constructor(protected app : GuardService, private router: Router){}

  canActivate(){
    if(!this.app.isDocente()){
      this.router.navigate(['/']);
    }else{
      return true;
    }
  }

}
