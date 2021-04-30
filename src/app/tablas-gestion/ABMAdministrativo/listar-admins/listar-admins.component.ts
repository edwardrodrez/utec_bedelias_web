import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import { AddAdminsComponent } from '../add-admins/add-admins.component';
import { ElimAdminsComponent } from '../elim-admins/elim-admins.component';
import { ModAdminsComponent } from '../mod-admins/mod-admins.component';
import {MatSort} from '@angular/material/sort';
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
  selector: 'app-listar-admins',
  templateUrl: './listar-admins.component.html',
  styleUrls: ['./listar-admins.component.css']
})
export class ListarAdminsComponent implements OnInit {

  dataSource = new MatTableDataSource<PeriodicElement>();
  columnsToDisplay = ['ci','nombre','apellido','correo','telefono','fechaNacimiento','actions'  ];
  expandedElement: PeriodicElement | null;
  selected;

  constructor(public dialog: MatDialog,private _UsuarioService:UsuarioService) {

  }
  ngOnInit(): void {
    this.getAdmins();
  }


  //ABM CRUD
  addAdministrativo(){
    this.dialog.open(AddAdminsComponent).afterClosed().subscribe(Response=>{
      this.getAdmins();
    });
    
  }
  elimAdministrativo(element){
    this.dialog.open(ElimAdminsComponent,{data:element}).afterClosed().subscribe(Response=>{

    });;
    this.getAdmins();
  }
  modAdministrativo(elem){
    this.dialog.open(ModAdminsComponent,{data:elem}).afterClosed().subscribe(Response=>{
      this.getAdmins();
    });;
  }

  getAdmins(){
    this._UsuarioService.getAdmins().subscribe(Response=>{
      this.dataSource = Response;

    })
  }
}
