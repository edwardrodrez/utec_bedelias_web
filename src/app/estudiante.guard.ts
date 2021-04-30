import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, GuardsCheckEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { AppComponent } from './app.component';
import { GuardService } from './guard.service';


@Injectable({
  providedIn: 'root'
})
export class EstudianteGuard implements CanActivate {
  constructor(protected app : GuardService, private router: Router){}

  canActivate(){
    if(!this.app.isEstudiante()){
      this.router.navigate(['/bedelias']);
    }else{
      return true;
    }
  }

}
