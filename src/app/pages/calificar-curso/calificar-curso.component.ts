
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CalificarService } from 'src/app/services/calificar.service';
import { AddCalificacionComponent } from './add-calificacion/add-calificacion.component';
import { ModCalificacionComponent } from './mod-calificacion/mod-calificacion.component';

export interface ret {
  idacta: number;
  calificacion: number;
}

export interface periodos {
  curso: curso;
  sede: sede;
  actas: acta[];
}

export interface curso {
  nombre: string;
}
export interface sede {
  nombre: string;
}

export interface acta {
  idacta: number;
  calificacion: number;
  usuario: usuario;
  estado: string;
}
export interface usuario {
  persona: persona;
}

export interface persona {
  nombre: string;
  apellido: string;
  ci:string
}
@Component({
  selector: 'app-calificar-curso',
  templateUrl: './calificar-curso.component.html',
  styleUrls: ['./calificar-curso.component.css']
})
export class CalificarCursoComponent implements OnInit {
  dataSource: acta[];
  typesOfShoes: periodos[] ;
  columnsToDisplay = ['nombre','apellido','CI','nota','estado','acciones' ];
  ret:ret;
  constructor(private calificarS:CalificarService,public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getLectivos();
    this.getactas();
  }

  addCalificacion(id){
    this.dialog.open(AddCalificacionComponent,{data:id}).afterClosed().subscribe(Response=>{
      this.getactas();
    });;
  }
  modCalificacion(id,calificacion){
    this.ret = {
      idacta: id,
      calificacion : calificacion
    }
    this.dialog.open(ModCalificacionComponent,{data:this.ret}).afterClosed().subscribe(Response=>{
      this.getactas();
    });;
  }

  getLectivos(){
    this.calificarS.getLectivosDocentes(localStorage.getItem('idusuario')).subscribe(Response => {
      this.typesOfShoes = Response;
    });
  };

  getactas(){
    this.calificarS.getLectivosDocentes(localStorage.getItem('idusuario')).subscribe(Response => {
      this.typesOfShoes = Response;
      if(this.typesOfShoes != null && this.typesOfShoes[0] != null)
      this.actaPeriodo(this.typesOfShoes[0].actas);
    });
  };

  actaPeriodo(element){
    this.dataSource = element;
  }

}


