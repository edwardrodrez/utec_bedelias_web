import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppComponent } from './app.component';
import { GuardService } from './guard.service';

@Injectable({
  providedIn: 'root'
})
export class SecreGuard implements CanActivate {
  constructor(protected app : GuardService, private router: Router){}

  canActivate(){
    if(!this.app.isSecre()){
      this.router.navigate(['/']);
    }else{
      return true;
    }
  }

}
