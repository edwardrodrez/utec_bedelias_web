import {Injectable} from '@angular/core';
import {HttpHandler, HttpRequest, HttpInterceptor} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { CanActivate, Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private _snackBar: MatSnackBar,private router: Router) {}
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  horizontalPositionError: MatSnackBarHorizontalPosition = 'center';
  verticalPositionError: MatSnackBarVerticalPosition = 'bottom';

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

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError(error => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {

          errorMessage = `${error.error.message}`;
        } else {

          errorMessage =  `${error.error}`;
        }


        if( errorMessage == '[object ProgressEvent]'){
          errorMessage = "Error inesperado intentelo mas tarde"
        }
        if( errorMessage == 'null'){
          this.router.navigate(['/']);
          errorMessage = "No tiene permisos para acceder a esta ruta"
        }

        this.openNotificacionError(errorMessage);
        return throwError(errorMessage);
      })
    );
  }
}
