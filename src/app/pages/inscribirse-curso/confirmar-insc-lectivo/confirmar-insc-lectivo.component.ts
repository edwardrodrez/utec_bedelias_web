import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { InscripcionAlumnoService } from 'src/app/services/inscripcion-alumno.service';

export interface val {
  idperiodo: number;
  idusuario: number;
}

@Component({
  selector: 'app-confirmar-insc-lectivo',
  templateUrl: './confirmar-insc-lectivo.component.html',
  styleUrls: ['./confirmar-insc-lectivo.component.css']
})
export class ConfirmarInscLectivoComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  horizontalPositionError: MatSnackBarHorizontalPosition = 'center';
  verticalPositionError: MatSnackBarVerticalPosition = 'bottom';
  constructor(@Inject(MAT_DIALOG_DATA) public data: val,private InscripcionS:InscripcionAlumnoService,private dialog:MatDialog,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  insc(){
    this.InscripcionS.addEstudiante(this.data).subscribe(Response=>{
      this.dialog.closeAll();
      this.openNotificacionUsuario("Inscripción exitosa");
    })
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
