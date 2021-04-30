import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatDialog} from '@angular/material/dialog';
import { AddTipodecursoComponent } from '../add-tipodecurso/add-tipodecurso.component';
import { ElimTipodecursoComponent } from '../elim-tipodecurso/elim-tipodecurso.component';
import { ModTipodecursoComponent } from '../mod-tipodecurso/mod-tipodecurso.component';
import { Tiposdecurso } from 'src/app/interfaces/tipodecurso';
import { TipoDeCursoService } from 'src/app/services/tipo-de-curso.service';


export interface PeriodicElement {
  nombre: string;

}


@Component({
  selector: 'app-listar-tipo-cursos',
  templateUrl: './listar-tipo-cursos.component.html',
  styleUrls: ['./listar-tipo-cursos.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListarTipoCursosComponent implements OnInit {
  dataSource:Tiposdecurso[];
  columnsToDisplay = ['nombre','actions'];
  expandedElement: PeriodicElement | null;
  constructor(public dialog: MatDialog ,private _tiposDeCursoService:TipoDeCursoService) {}
  ngOnInit(): void {
    this.getTiposDeCurso();

  }

  //ABM CRUDD
  addTipo(){
    this.dialog.open(AddTipodecursoComponent).afterClosed().subscribe(Response=>{
      this.getTiposDeCurso();
    });
  }

  elimTipo(element){
    this.dialog.open(ElimTipodecursoComponent,{data:element}).afterClosed().subscribe(Response=>{
      this.ngOnInit();
    });
  }

  modTipo(element){
    console.log(element);
    this.dialog.open(ModTipodecursoComponent,{data:element}).afterClosed().subscribe(Response=>{
      this.ngOnInit();
    });
  }

  getTiposDeCurso(){
  this._tiposDeCursoService.getTiposDeCurso().subscribe(Response=>{
    this.dataSource = Response;
  });
  }

}
