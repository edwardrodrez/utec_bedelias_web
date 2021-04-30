import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from '@angular/material/table';
import { AddPExamenComponent } from '../add-p-examen/add-p-examen.component';
import { ElimPExamenComponent } from '../elim-p-examen/elim-p-examen.component';
import { ModPExamenComponent } from '../mod-p-examen/mod-p-examen.component';
import { EstabInscExamenComponent } from '../estab-insc-examen/estab-insc-examen.component';
import { ModInscExamenComponent } from '../mod-insc-examen/mod-insc-examen.component';
import { AsignarDocenteExamenComponent } from '../asignar-docente-examen/asignar-docente-examen.component';
import { PeriodosService } from 'src/app/services/periodos.service';
import { ClonarExamenComponent } from '../clonar-examen/clonar-examen.component';

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
  selector: 'app-listar-periodo-examenes',
  templateUrl: './listar-periodo-examenes.component.html',
  styleUrls: ['./listar-periodo-examenes.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListarPeriodoExamenesComponent implements OnInit {
  dataSource = new MatTableDataSource();
  columnsToDisplay = ['fechaInicio','sede','curso','docente','docenteci','actions','fechaInscripcionInicio','fechaInscripcionFin','actions2'  ];
  expandedElement: PeriodicElement | null;
  selected;
  constructor(public dialog: MatDialog,private _periodoService:PeriodosService) {}

  ngOnInit(): void {
    this.selected = 'option1';
    this.getPeriodos();
  }

  //ABM CRUD
  addExamen(){
    this.dialog.open(AddPExamenComponent).afterClosed().subscribe(Response=>{
      this.getPeriodos();
    });
  }
  elimExamen(elem){
    this.dialog.open(ElimPExamenComponent,{data:elem}).afterClosed().subscribe(Response=>{
      this.getPeriodos();
    });
  }
  modExamen(elem){
    this.dialog.open(ModPExamenComponent,{data:elem}).afterClosed().subscribe(Response=>{
      this.getPeriodos();
    });
  }

  estaPeriodo(elem){
    this.dialog.open(EstabInscExamenComponent,{data:elem}).afterClosed().subscribe(Response=>{
      this.getPeriodos();
    });
  }
  modPeriodo(elem){
    this.dialog.open(ModInscExamenComponent,{data:elem}).afterClosed().subscribe(Response=>{
      this.getPeriodos();
    });
  }
  asignarDocente(elem){
    this.dialog.open(AsignarDocenteExamenComponent,{data:elem}).afterClosed().subscribe(Response=>{
      this.getPeriodos();
    });
  }
  clonExamen(elem){
    this.dialog.open(ClonarExamenComponent,{data:elem}).afterClosed().subscribe(Response=>{
      this.getPeriodos();
    });
  }
  getPeriodos(){
    this._periodoService.getExamenes().subscribe(Response=>{
      this.dataSource = Response
      console.log(Response)
    })
  }
  getActivos(){
    this._periodoService.getExamenesActuales().subscribe(Response=>{
      this.dataSource = Response
    })
  }
}
