import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { AddSecretarioComponent } from '../add-secretario/add-secretario.component';
import { AlimSecretarioComponent } from '../alim-secretario/alim-secretario.component';
import { ModSecretarioComponent } from '../mod-secretario/mod-secretario.component';
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
  selector: 'app-listar-secretarios',
  templateUrl: './listar-secretarios.component.html',
  styleUrls: ['./listar-secretarios.component.css']
})
export class ListarSecretariosComponent implements OnInit {
  dataSource = new MatTableDataSource <PeriodicElement>();
  columnsToDisplay = ['ci','nombre','apellido','correo','telefono','fechaNacimiento','actions'  ];
  expandedElement: PeriodicElement | null;
  selected;
  constructor(public dialog: MatDialog,private _UsuarioService:UsuarioService) {}

  ngOnInit(): void {
    this.getSecretarios();
  }


  getSecretarios(){
    this._UsuarioService.getSecretarios().subscribe(Response=>{
      this.dataSource = Response;
    })

  }

  //ABM CRUD
  addSecretario(){
    this.dialog.open(AddSecretarioComponent).afterClosed().subscribe(Response=>{
      this.getSecretarios();
    });
  }
  elimSecretario(elem){
    this.dialog.open(AlimSecretarioComponent,{data:elem}).afterClosed().subscribe(Response=>{
      this.getSecretarios();
    });
  }
  modSecretario(elem){
    this.dialog.open(ModSecretarioComponent,{data:elem}).afterClosed().subscribe(Response=>{
      this.getSecretarios();
    });
  }
}
