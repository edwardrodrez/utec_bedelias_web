import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatDialog} from '@angular/material/dialog';
import { AddCursoComponent } from './add-curso/add-curso.component';
import { ElimCursoComponent } from './elim-curso/elim-curso.component';
import { ModCursoComponent } from './mod-curso/mod-curso.component';
import { AddPreviaCursoComponent } from '../add-previa-curso/add-previa-curso.component';
import { ElimPreviaCursoComponent } from '../elim-previa-curso/elim-previa-curso.component';
import { Curso } from 'src/app/interfaces/curso';
import { CursoService } from 'src/app/services/curso.service';
import { Carrera } from 'src/app/interfaces/carrera';
import { Previa } from 'src/app/interfaces/previa';

export interface PeriodicElement {
  nombre: string;
  TipodeCurso: string;
  creditos: number;
  AreadeEstudio:string;
}

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListarCursosComponent implements OnInit {
  dataSource:Curso[];
  carreras:Carrera[];
  cursoActual:Curso;
  carreraActual:Carrera;
  
  previas:Previa[];
  columnsToDisplay = ['nombre','TipodeCurso', 'creditos','actions'];
  expandedElement: PeriodicElement | null;
  constructor(public dialog: MatDialog,private _cursoService:CursoService) {}
  ngOnInit(): void {
    this.getCursos();
  }

  //ABM CRUDD
  addCurso(){
    this.dialog.open(AddCursoComponent).afterClosed().subscribe(Response=>{
      this.getCursos();
    });
  }
  elimCurso(element){
    this.dialog.open(ElimCursoComponent,{data:element}).afterClosed().subscribe(Response=>{
      this.getCursos();
    });
  }
  modCurso(element){
    this.dialog.open(ModCursoComponent,{data:element}).afterClosed().subscribe(Response=>{
      this.getCursos();
    });
  }
  addPrevia(){
    if(this.carreraActual != null && this.cursoActual != null){
    var pre:Curso[] = [];
    for(let cu of this.dataSource){
      if(!this.previas.find(el => el.curso.idcurso == cu.idcurso) && cu.idcurso != this.cursoActual.idcurso){
        pre.push(cu);
      }
    }
    this.dialog.open(AddPreviaCursoComponent,{data:{idcarrera:this.carreraActual.idcarrera,idcurso:this.cursoActual.idcurso,cursos:pre}}).afterClosed().subscribe(Response=>{
      this.getPrevias(this.carreraActual);

      
    });
  }
  }
  quitarPrevia(element){
    this.dialog.open(ElimPreviaCursoComponent,{data:{idcurso:this.cursoActual.idcurso,idprevia:element}}).afterClosed().subscribe(Response=>{
      this.getPrevias(this.carreraActual);
    });;
  }
  getCursos(){
   this._cursoService.getCursos().subscribe(Response=>{
      this.dataSource = Response;
      if(this.dataSource != null && this.dataSource[0] != null){
        this.getCarrerasCurso(this.dataSource[0]);}
      
    })
  }

  getCarrerasCurso(element){
    this._cursoService.getCarrerasCurso(element.idcurso).subscribe(Response=>{
      this.carreras = Response;
      this.cursoActual = element;
      if(this.carreras != null && this.carreras[0] != null){
        this.carreraActual =this.carreras[0];
        this.getPrevias(this.carreras[0]);
      }
      else{
        this.carreraActual = null;
        this.previas = null;
      }
    })
  }

  getPrevias(element){ 
    this.carreraActual = element;
    this._cursoService.getPrevias({idcurso:this.cursoActual.idcurso,idcarrera:element.idcarrera}).subscribe(Response=>{
      this.previas = Response;
    /*  this.previasListar.length = 0;
      for(let pre of this.previas){
        this.previasListar.push(pre.curso);
      }  */  
    })
  }
}
