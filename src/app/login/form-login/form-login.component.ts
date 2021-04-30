import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  registroDTO = {
    nombre:      null,
    password:   null
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  horizontalPositionError: MatSnackBarHorizontalPosition = 'center';
  verticalPositionError: MatSnackBarVerticalPosition = 'bottom';
  constructor(private _snackBar: MatSnackBar,public dialog: MatDialog,private router: Router,private oUsuariosService:UsuariosService) { }

  ngOnInit(): void {
  }
  nombreFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4)
  ]);
  passFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4)
  ]);
  login(){
      if(this.nombreFormControl.valid&&this.passFormControl){
        this.oUsuariosService.login(this.registroDTO);
        this.dialog.closeAll();
      }




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
}
