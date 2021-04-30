import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import {MatDialog} from '@angular/material/dialog';
import { CalificarService } from 'src/app/services/calificar.service';
import { AddClaseAsistenciaComponent } from './add-clase-asistencia/add-clase-asistencia.component';
import { ListarAsistenciasComponent } from './listar-asistencias/listar-asistencias.component';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

export interface Val {
  idperiodo: number;
}
export interface Clase {
  idperiodo: number;
  fecha: string;
}
export interface Asistencia {
  idperiodo: number;
  idclase: number;
}

@Component({
  selector: 'app-control-asistencias',
  templateUrl: './control-asistencias.component.html',
  styleUrls: ['./control-asistencias.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class ControlAsistenciasComponent implements OnInit {
  val:Val;
  clase:Clase;
  asistencia:Asistencia;
  displayedColumns = ['fecha', 'acciones'];
  dataSource;
  typesOfShoes;
  Auxidperiodo:number = 0;
  nombreCurso = "no seleccionada";
  constructor(private calificarS:CalificarService,public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getLectivos()
    this.val = {
      idperiodo: 0
    }
    this.clase = {
      idperiodo: 0,
      fecha: formatDate(new Date(), 'yyyy-MM-dd', 'en-US')
    }
    this.asistencia = {
      idperiodo: 0,
      idclase: 0
    }
  }

  addClase(){
    this.clase = {
      idperiodo: this.Auxidperiodo,
      fecha: formatDate(new Date(), 'yyyy-MM-dd', 'en-US')
    }
    this.dialog.open(AddClaseAsistenciaComponent,{data:this.clase}).afterClosed().subscribe(Response=>{
      this.getLectivos();
    });

  }

  verAsistencias(id){
    this.asistencia = {
      idperiodo: this.Auxidperiodo,
      idclase: id
    }
    this.dialog.open(ListarAsistenciasComponent,{data:this.asistencia});
    this.getLectivos()
  }

  getLectivos(){
    this.calificarS.getLectivosDocentes(localStorage.getItem('idusuario')).subscribe(Response => {
      this.typesOfShoes = Response;
      this.getClase(this.typesOfShoes[0].idperiodo,"");
    });
  };

  getClase(id,nombre){
    this.val = {
      idperiodo: id
    }
    this.Auxidperiodo=id;
    this.nombreCurso=nombre;
    this.calificarS.getClase(this.val).subscribe(Response => {
      var reversed = Response.reverse()
      this.dataSource = reversed;
    });
  };


}
