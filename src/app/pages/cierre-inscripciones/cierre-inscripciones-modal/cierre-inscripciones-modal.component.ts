import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { SecretarioService } from 'src/app/services/secretario.service';

@Component({
  selector: 'app-cierre-inscripciones-modal',
  templateUrl: './cierre-inscripciones-modal.component.html',
  styleUrls: ['./cierre-inscripciones-modal.component.css']
})
export class CierreInscripcionesModalComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition= 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  horizontalPositionError: MatSnackBarHorizontalPosition = 'center';
  verticalPositionError: MatSnackBarVerticalPosition = 'bottom';
  constructor(private _snackBar: MatSnackBar,@Inject(MAT_DIALOG_DATA) public data: any, private _secretarioService:SecretarioService,public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  cerrarPeriodoInsc(){
    this._secretarioService.cerrarPeriodo({idperiodo:this.data}).subscribe(Response=>{
      
    });
    this.openNotificacionUsuario("Periodo de Inscripcion ah sido finalizado");
    this.dialog.closeAll();
    //this.openNotificacionUsuario("Periodo de Inscripcion Cerrado");
  }
  openNotificacionUsuario(mensaje:string) {
    this._snackBar.open(mensaje, 'OK', {
      duration: 3000,
      panelClass: ['notificar-usuario'],
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
