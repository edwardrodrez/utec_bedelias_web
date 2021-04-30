import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from '@angular/material/table';
import { AddDocenteComponent } from '../add-docente/add-docente.component';
import { ElimDocenteComponent } from '../elim-docente/elim-docente.component';
import { ModDocenteComponent } from '../mod-docente/mod-docente.component';
import { UsuarioService } from 'src/app/services/usuario.service';

export interface PeriodicElement {
  nombre: string;
  apellido: string;
  correo: string;
  ci: number;
  telefono:number;
  fechaNacimiento: string;
}


@Component({
  selector: 'app-listar-docentes',
  templateUrl: './listar-docentes.component.html',
  styleUrls: ['./listar-docentes.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class ListarDocentesComponent implements OnInit {
  dataSource = new MatTableDataSource<PeriodicElement>();
  columnsToDisplay = ['ci','nombre','apellido','correo','telefono','fechaNacimiento','actions'  ];
  expandedElement: PeriodicElement | null;
  selected;
  constructor(public dialog: MatDialog,private _UsuarioService:UsuarioService) {

  }
  ngOnInit(): void {
    this.getDocentes();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getDocentes(){
    this._UsuarioService.getDocentes().subscribe(Response=>{
      this.dataSource = Response;
    })

  }

  //ABM CRUD
  addDocente(){
    this.dialog.open(AddDocenteComponent).afterClosed().subscribe(Response=>{
      this.getDocentes();
    });
  }
  elimDocente(elem){
    this.dialog.open(ElimDocenteComponent,{data:elem}).afterClosed().subscribe(Response=>{
      this.getDocentes();
    });
  }
  modDocente(elem){
    this.dialog.open(ModDocenteComponent,{data:elem}).afterClosed().subscribe(Response=>{
      this.getDocentes();
    });
  }

}
