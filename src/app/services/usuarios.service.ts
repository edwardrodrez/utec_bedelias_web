import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionModule } from '../interfaces/session.module';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
export interface Persona {
  ci:string,
  nombre:string,
  apellido:string,
  correo:string,
  telefono:string,
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  prefigo:string = "Account";
  public Persona : Persona;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition= 'top';
  horizontalPositionError: MatSnackBarHorizontalPosition = 'center';
  verticalPositionError: MatSnackBarVerticalPosition = 'bottom';
  constructor(
    private _snackBar: MatSnackBar,
    private router: Router,
    private httpClient: HttpClient
    ) {    
      this.Persona ={
      ci:"",
      nombre:"",
      apellido:"",
      correo:"",
      telefono:"",
    } }

  login(data:any){
    return this.httpClient.post<any>("http://localhost:8000/usuario/login", data , this.getheaders()).subscribe((resp: any) => {

      this.router.navigate(['/bedelias']);
      localStorage.setItem('token', resp.token);
      localStorage.setItem('roles', JSON.stringify(resp.roles));
      localStorage.setItem('idusuario', JSON.stringify(resp.idusuario));
      localStorage.setItem('persona', JSON.stringify(resp.persona));
      var p = JSON.parse(localStorage.getItem('persona')) ;
      this.Persona ={
        ci:p.ci,
        nombre:p.nombre,
        apellido:p.apellido,
        correo:p.correo,
        telefono:p.telefono,
      }
     
      
      if(localStorage.getItem('roles').includes( 'Administrativo' ) ){
          localStorage.setItem('menu', 'Admin');
      }
      if(localStorage.getItem('roles').includes( 'Estudiante' ) ){
          localStorage.setItem('menu', 'Estudiante');
      }
      if(localStorage.getItem('roles').includes( 'Docente' ) ){
          localStorage.setItem('menu', 'Docente');
      }
      if(localStorage.getItem('roles').includes( 'Secretario' ) ){
          localStorage.setItem('menu', 'Secretario');
      }
        this.openNotificacionUsuario("Bienvenid@ " + this.Persona.nombre);
      },(err:HttpErrorResponse)=>{
        this.openNotificacionError(err.error.message);
      });
  }
  
  openNotificacionUsuario(mensaje:string) {
    this._snackBar.open(mensaje, 'OK', {
      duration: 3000,
      panelClass: ['notificar-usuario'],
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
  openNotificacionError(mensaje:string) {
    this._snackBar.open(mensaje, 'ERROR', {
      duration: 5000,
      panelClass: ['notificar-error'],
      horizontalPosition: this.horizontalPositionError,
      verticalPosition: this.verticalPositionError,
    });
  }
  /**
   * Genera el headers de los riquest
   */
  cambiarPass(data):Observable<any>{
    return this.httpClient.post("http://localhost:8000/usuario/cambiarPass",data);
  }

  getheaders(){
    return {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
    };
  }

  private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
          console.error('An error occurred:', error.error.message);
      } else {
          console.error(
              `Backend returned code ${error.status}, ` +
              `body was: ${error.error}`);
      }
      return throwError(
          {
              code: error.status,
              body: error.error
          }
      );
  }


}
