import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { InscripcionAlumnoService } from 'src/app/services/inscripcion-alumno.service';
import { ConfirmarInscLectivoComponent } from './confirmar-insc-lectivo/confirmar-insc-lectivo.component';

export interface ret {
  idacta: number;
  calificacion: number;
}

export interface val {
  idperiodo: number;
  idusuario: number;
}

export interface Resval {
  res: boolean;
  mensaje: string;
}

export interface info {
  res: boolean;
  mensaje: string;
  nombre:string;
  creditos:number;
  idperiodo: number;
}

export interface periodos {
  idperiodo: number;
  curso: curso;
  sede: sede;
}

export interface curso {
  nombre: string;
  credito: number;
}
export interface sede {
  nombre: string;
}

export interface direccion {
  departamento: string;
  ciudad: string;
}


@Component({
  selector: 'app-inscribirse-curso',
  templateUrl: './inscribirse-curso.component.html',
  styleUrls: ['./inscribirse-curso.component.css']
})
export class InscribirseCursoComponent implements OnInit {
  typesOfShoes: periodos[];
  val:val;
  resval:Resval;
  info:info;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  horizontalPositionError: MatSnackBarHorizontalPosition = 'center';
  verticalPositionError: MatSnackBarVerticalPosition = 'bottom';
  constructor(public dialog: MatDialog,private IncripcionS:InscripcionAlumnoService,private _snackBar: MatSnackBar) {}



  ngOnInit(): void {
    this.getLectivos()

    this.val ={
      idperiodo: 0,
      idusuario: 0
    }

    this.resval ={
      res: false,
      mensaje: ""
    }

    this.info ={
      res: false,
      mensaje: "",
      creditos: 0,
      nombre: "",
      idperiodo: 0
    }
  }

  getLectivos(){
    this.IncripcionS.getLectivosAlumno(localStorage.getItem('idusuario')).subscribe(Response => {
      this.typesOfShoes = Response;
    });
  };

  Validacion(id,curso:curso){
    this.val ={
      idperiodo: id,
      idusuario: parseInt(localStorage.getItem('idusuario'))
    }

    this.IncripcionS.Validacion(this.val).subscribe(Response => {
      this.resval = Response;
      console.log(Response);
      console.log( this.resval);
      this.info ={
        res: this.resval.res,
        mensaje: this.resval.mensaje,
        creditos: curso.credito,
        nombre: curso.nombre,
        idperiodo: id
      }
    });


  };

  confirmarlectivo(id){
    this.val ={
      idperiodo: id,
      idusuario: parseInt(localStorage.getItem('idusuario'))
    }
    this.dialog.open(ConfirmarInscLectivoComponent,{data:this.val});
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
