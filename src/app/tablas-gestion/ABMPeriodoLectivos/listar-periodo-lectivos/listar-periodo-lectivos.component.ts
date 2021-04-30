import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from '@angular/material/table';
import { AddPLectivoComponent } from '../add-p-lectivo/add-p-lectivo.component';
import { ElimPLectivoComponent } from '../elim-p-lectivo/elim-p-lectivo.component';
import { ModPLectivoComponent } from '../mod-p-lectivo/mod-p-lectivo.component';
import { ClonarPLectivoComponent } from '../clonar-p-lectivo/clonar-p-lectivo.component';
import { EstablecerFechaInscComponent } from '../establecer-fecha-insc/establecer-fecha-insc.component';
import { ModFechaInscComponent } from '../mod-fecha-insc/mod-fecha-insc.component';
import { AsignarDocenteLectivoComponent } from '../asignar-docente-lectivo/asignar-docente-lectivo.component';
import { PeriodosService } from 'src/app/services/periodos.service';

export interface PeriodicElement {
  fechaInicio: string;
  fechaFinal: string;
  curso: string;
  sede: string;
  docente:string;
  fechaInscripcionInicio: string;
  fechaInscripcionFin: string;
}


@Component({
  selector: 'app-listar-periodo-lectivos',
  templateUrl: './listar-periodo-lectivos.component.html',
  styleUrls: ['./listar-periodo-lectivos.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListarPeriodoLectivosComponent implements OnInit {
  dataSource = new MatTableDataSource();
  columnsToDisplay = ['fechaInicio','fechaFinal','sede','curso','docente','docenteci','actions','fechaInscripcionInicio','fechaInscripcionFin','actions2'  ];
  expandedElement: PeriodicElement | null;
  selected;
  constructor(public dialog: MatDialog,private _periodoService:PeriodosService) {}

  ngOnInit(): void {
    this.selected = 'option1';
    this.getPeriodos();
  }

  //ABM CRUD
  addLectivo(){
    this.dialog.open(AddPLectivoComponent).afterClosed().subscribe(Response=>{
      this.getPeriodos();
    });
    
  }
  elimLectivo(elem){
    this.dialog.open(ElimPLectivoComponent,{data:elem}).afterClosed().subscribe(Response=>{
      this.getPeriodos();
    });
  }
  modLectivo(elem){
    this.dialog.open(ModPLectivoComponent,{data:elem}).afterClosed().subscribe(Response=>{
      this.getPeriodos();
    });
  }
  clonLectivo(elem){
    this.dialog.open(ClonarPLectivoComponent,{data:elem}).afterClosed().subscribe(Response=>{
      this.getPeriodos();
    });
  }
  estaPeriodo(elem){
    this.dialog.open(EstablecerFechaInscComponent,{data:elem}).afterClosed().subscribe(Response=>{
      this.getPeriodos();
    });
  }
  modPeriodo(elem){
    this.dialog.open(ModFechaInscComponent,{data:elem}).afterClosed().subscribe(Response=>{
      this.getPeriodos();
    });
  }
  asignarDocente(elem){
    this.dialog.open(AsignarDocenteLectivoComponent,{data:elem}).afterClosed().subscribe(Response=>{
      this.getPeriodos();
    });
  }
  getPeriodos(){
    this._periodoService.getLectivos().subscribe(Response=>{
      this.dataSource = Response
    })
  }
  getActivos(){
    this._periodoService.getLectivosActuales().subscribe(Response=>{
      this.dataSource = Response
    })
  }
}
