import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { InscripcionAlumnoService } from 'src/app/services/inscripcion-alumno.service';
import { ConfirmarInscExamenComponent } from './confirmar-insc-examen/confirmar-insc-examen.component';


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
  fechaInicial:Date
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
  selector: 'app-inscribirse-examen',
  templateUrl: './inscribirse-examen.component.html',
  styleUrls: ['./inscribirse-examen.component.css']
})
export class InscribirseExamenComponent implements OnInit {
  typesOfShoes: periodos[];
  val:val;
  resval:Resval;
  info:info;
  constructor(public dialog: MatDialog,private IncripcionS:InscripcionAlumnoService) {}



  ngOnInit(): void {
    this.getExamenes()
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

  getExamenes(){
    this.IncripcionS.getExamenAlumno(localStorage.getItem('idusuario')).subscribe(Response => {
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
      this.info ={
        res: this.resval.res,
        mensaje: this.resval.mensaje,
        creditos: curso.credito,
        nombre: curso.nombre,
        idperiodo: id
      }
    });


  };

  confirmarExamen(id){
    this.val ={
      idperiodo: id,
      idusuario: parseInt(localStorage.getItem('idusuario'))
    }
    this.dialog.open(ConfirmarInscExamenComponent,{data:this.val});
  }
}
