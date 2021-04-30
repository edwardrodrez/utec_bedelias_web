import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SecretarioService } from 'src/app/services/secretario.service';
import { Inject } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
@Component({
  selector: 'app-cierre-examen-modal',
  templateUrl: './cierre-examen-modal.component.html',
  styleUrls: ['./cierre-examen-modal.component.css']
})
export class CierreExamenModalComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  horizontalPositionError: MatSnackBarHorizontalPosition = 'center';
  verticalPositionError: MatSnackBarVerticalPosition = 'bottom';
  constructor(private _snackBar: MatSnackBar,@Inject(MAT_DIALOG_DATA) public data: any, private _secretarioService:SecretarioService,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  cerrarPeriodoInscExamen(){
    console.log(this.data);
    this._secretarioService.cerrarPeriodo({idperiodo:this.data}).subscribe(Response=>{

    });
    this.openNotificacionUsuario("Periodo de Inscripcion ah sido finalizado");
    this.dialog.closeAll();
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
