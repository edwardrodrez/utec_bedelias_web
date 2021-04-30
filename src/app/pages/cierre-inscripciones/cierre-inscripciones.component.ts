import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from '@angular/material/table';
import { CierreInscripcionesModalComponent } from './cierre-inscripciones-modal/cierre-inscripciones-modal.component';
import { SecretarioService } from 'src/app/services/secretario.service';
import { Periododeinscrpciones } from 'src/app/interfaces/periododeinscrpciones';
import { Carrera } from 'src/app/interfaces/carrera';



export interface PeriodicElement {
  idperiodo:number;
  fechaFinal: string;
  fechanInicial: string;
  carrera: Carrera;

}


@Component({
  selector: 'app-cierre-inscripciones',
  templateUrl: './cierre-inscripciones.component.html',
  styleUrls: ['./cierre-inscripciones.component.css']
})
export class CierreInscripcionesComponent implements OnInit {

  dataSource: PeriodicElement[];
  columnsToDisplay = ['carrera','fechaInicial','fechaFinal','actions2'  ];
  expandedElement: PeriodicElement | null;
  selected;

  constructor(public dialog: MatDialog,private _secretarioService : SecretarioService) {}

  ngOnInit(): void {
    this.selected = 'option1';
    this.getPeriodosInscripciones();
  }

  getPeriodosInscripciones(){
    this._secretarioService.getPeriodosInscripciones().subscribe(Response=>{
      this.dataSource = Response;

    });
  }

  cerrarPeriodo(idperiodo){
    this.dialog.open(CierreInscripcionesModalComponent,{data:idperiodo}).afterClosed().subscribe(Response=>{
      this.ngOnInit();

    });
  }
}
