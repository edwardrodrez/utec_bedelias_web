import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AddCarreraComponent } from '../add-carrera/add-carrera.component';
import { ModCarreraComponent } from '../mod-carrera/mod-carrera.component';
import { ElimCarreraComponent } from '../elim-carrera/elim-carrera.component';
import { AddCursoCarreraComponent } from '../add-curso-carrera/add-curso-carrera.component';
import { QuitarCursosCarreraComponent } from '../quitar-cursos-carrera/quitar-cursos-carrera.component';
import { CarreraService } from 'src/app/services/carrera.service';
import { Curso } from 'src/app/interfaces/curso';
import { Sede } from 'src/app/interfaces/sede';
import { Carrera } from 'src/app/interfaces/carrera';
import { IncluirCarreraComponent } from '../../ABMSedes/incluir-carrera/incluir-carrera.component';

export interface PeriodicElement {
  nombre: string;
  creditos: number;
}


@Component({
  selector: 'app-listar-carreras',
  templateUrl: './listar-carreras.component.html',
  styleUrls: ['./listar-carreras.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListarCarrerasComponent implements OnInit {
  dataSource:Carrera[];
  incluiCarreraDialogRef: MatDialogRef<AddCursoCarreraComponent>;
  cursos:Curso[];
  sedes:Sede[];
  actual:Carrera;
  columnsToDisplay = ['nombre','creditos','actions'];
  expandedElement: PeriodicElement | null;

  constructor(public dialog: MatDialog,private _carreraService : CarreraService) {}

  ngOnInit(): void {
    this.getCarreras();
  }

  //ABM CRUD
  addCarrera(){
    this.dialog.open(AddCarreraComponent).afterClosed().subscribe(Response =>{
      this.ngOnInit();
    });
  }

  modCarrera(element){
    this.dialog.open(ModCarreraComponent,{data:element}).afterClosed().subscribe(Response=>{
      this.ngOnInit();
    });
  }

  elimCarrera(idcarrera){
    this.dialog.open(ElimCarreraComponent,{data:idcarrera}).afterClosed().subscribe(Response=>{
      this.ngOnInit();
    });
  }

  addCursoCarrera(){
    this.incluiCarreraDialogRef = this.dialog.open(AddCursoCarreraComponent,{data:this.actual});
    this.incluiCarreraDialogRef.afterClosed().subscribe(Response=>{
      if(Response != null && Response[0]!= null){
        this.cursos = this.cursos.concat(Response);
        this.actual.cursos = this.cursos;
      }
    })
  }

  quitarCursoCarrera(cur){
    this.dialog.open(QuitarCursosCarreraComponent,{data:{car:this.actual,cur:cur}}).afterClosed().subscribe(Response=>{
      const index: number = this.cursos.indexOf(cur);
      if (index !== -1) {
        this.cursos.splice(index, 1);
      }
    });
  }

  getCarreras(){
    this._carreraService.getCarreras().subscribe(Response=>{
      this.dataSource = Response;
      if(this.dataSource[0] != null){
        this.listarTodo(this.dataSource[0]);
      }
    })
  }
  listarTodo(carr){
    
    this.cursos = carr.cursos;
    this.actual = carr;
    this.getSedesCarrera(carr.idcarrera);
  }

  getSedesCarrera(id){
    this._carreraService.getCarreraSedes(id).subscribe(Response=>{
    
      this.sedes = Response;
    });
  }

}
