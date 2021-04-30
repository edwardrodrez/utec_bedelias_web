import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from '@angular/material/table';
import { CierreExamenModalComponent } from './cierre-examen-modal/cierre-examen-modal.component';
import { SecretarioService } from 'src/app/services/secretario.service';
import { Curso } from 'src/app/interfaces/curso';
import { Sede } from 'src/app/interfaces/sede';



export interface PeriodicElement {
  idperiodo:number;
  fechaFinal: string;
  fechanInicial: string;
  curso: Curso;
  sede : Sede;
}

@Component({
  selector: 'app-cierre-examenes',
  templateUrl: './cierre-examenes.component.html',
  styleUrls: ['./cierre-examenes.component.css']
})
export class CierreExamenesComponent implements OnInit {
  dataSource: PeriodicElement[];
  columnsToDisplay = ['sede','curso','fechaInicial','fechaFinal','actions2' ];
  expandedElement: PeriodicElement | null;
  selected;
  constructor(public dialog: MatDialog,private _secretarioService : SecretarioService) {}

  ngOnInit(): void {
    this.selected = 'option1';
    this.getPeriodosExamenes();
  }
  getPeriodosExamenes(){
    this._secretarioService.getPeriodosExamenes().subscribe(Response=>{
      this.dataSource = Response;

    });
  }
  cerrarPeriodo(idperiodo){
    this.dialog.open(CierreExamenModalComponent,{data:idperiodo}).afterClosed().subscribe(Response=>{
      this.ngOnInit();

    });
  }
  
}
