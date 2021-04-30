import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatDialog} from '@angular/material/dialog';
import { AddAreaComponent } from '../add-area/add-area.component';
import { ElimAreaComponent } from '../elim-area/elim-area.component';
import { ModAreaComponent } from '../mod-area/mod-area.component';
import { AddCursoAreaComponent } from '../add-curso-area/add-curso-area.component';
import { AddCreditosminimosComponent } from '../add-creditosminimos/add-creditosminimos.component';
import { QuitarCursosAreaComponent } from '../quitar-cursos-area/quitar-cursos-area.component';
import { AddPreviaCursoComponent } from '../../ABMCursos/add-previa-curso/add-previa-curso.component';
import { ElimPreviaCursoComponent } from '../../ABMCursos/elim-previa-curso/elim-previa-curso.component';
import { Areadeestudio } from 'src/app/interfaces/areadeestudio';
import { AreaDeEstudioService } from 'src/app/services/area-de-estudio.service';
import { Curso } from 'src/app/interfaces/curso';
import { CarreraArea } from 'src/app/interfaces/carrera-area';
export interface PeriodicElement {
  nombre: string;
}


@Component({
  selector: 'app-listar-areas',
  templateUrl: './listar-areas.component.html',
  styleUrls: ['./listar-areas.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListarAreasComponent implements OnInit {
  dataSource:any;
  areaActual:Areadeestudio;
  cursos:Curso[];
  carreraArea:CarreraArea[];
  idAdd:number;
  columnsToDisplay = ['nombre','actions'];
  expandedElement: PeriodicElement | null;
  constructor(public dialog: MatDialog,private _AreaDeEstudioService:AreaDeEstudioService) {}

 ngOnInit() {
    this.getAreasDeEstudio();
  }

  //ABM CRUDD
  addArea(){
    this.dialog.open(AddAreaComponent).afterClosed().subscribe(Response=>{
      this.getAreasDeEstudio();
    });
  }
  elimArea(element){
    this.dialog.open(ElimAreaComponent,{data:element.idareadeestudio}).afterClosed().subscribe(Response=>{
     this.idAdd = null;
      this.getAreasDeEstudio();
    });
  }
  modArea(element){
    this.dialog.open(ModAreaComponent,{data:element}).afterClosed().subscribe(Response =>{
        this.getAreasDeEstudio();
      });
  }
  addCursoArea(){
    this.dialog.open(AddCursoAreaComponent,{data:this.areaActual}).afterClosed().subscribe(Response=>{
      this.idAdd = this.areaActual.idareadeestudio;
      this.getAreasDeEstudio();  
    });
  }

  addCreditos(elem){
    this.dialog.open(AddCreditosminimosComponent,{data:elem}).afterClosed().subscribe(Response=>{
      this.idAdd = this.areaActual.idareadeestudio;
      this.getAreasDeEstudio();  
    });
  }

  quitarCursoArea(element){
    this.dialog.open(QuitarCursosAreaComponent,{data:{area:this.areaActual,curso:element}}).afterClosed().subscribe(Response=>{
      this.idAdd = this.areaActual.idareadeestudio;
      this.getAreasDeEstudio();  
    });
  }

   getAreasDeEstudio(){
     this._AreaDeEstudioService.getAreasDeEstudio().subscribe(Response=>{
      this.dataSource = Response;
      if(this.dataSource != null && this.dataSource[0] != null){
        if(this.idAdd != null ){
          this.vertodo(this.dataSource.find(el=> el.idareadeestudio == this.idAdd));
        }
        else
          this.vertodo(this.dataSource[0]);
      }
    }) 
  }

  vertodo(element){
    console.log(element)
    this.areaActual = element;
    this.cursos = element.cursos;
    this.carreraArea = element.carrera_area;
    

  }

}
