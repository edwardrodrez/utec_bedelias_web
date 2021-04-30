import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor() { }

  isAdmin(){
    if(localStorage.getItem('roles') == null ){
      return false
    }
    if(localStorage.getItem('roles').includes( 'Administrativo' ) ){
      return true
    }
    return false;
  }

  isEstudiante(){
    if(localStorage.getItem('roles') == null ){
      return false
    }
    if(localStorage.getItem('roles').includes( 'Estudiante' ) ){
      return true
    }
    return false;
  }

  isDocente(){
    if(localStorage.getItem('roles') == null ){
      return false
    }
    if(localStorage.getItem('roles').includes( 'Docente' ) ){
      return true
    }
    return false;
  }


  isSecre(){
    if(localStorage.getItem('roles') == null ){
      return false
    }
    if(localStorage.getItem('roles').includes( 'Secretario' ) ){
      return true
    }
    return false;
  }

  isSesion(){

    if(localStorage.getItem('token') == null ){
      return false
    }
    return true;
  }
}
