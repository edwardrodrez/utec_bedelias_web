import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Usuario } from 'src/app/interfaces/usuario';
import { PeriodosService } from 'src/app/services/periodos.service';
import { UsuarioService } from 'src/app/services/usuario.service';


export interface PeriodicElement {
  docente: string;

}


@Component({
  selector: 'app-asignar-docente-examen',
  templateUrl: './asignar-docente-examen.component.html',
  styleUrls: ['./asignar-docente-examen.component.css']
})
export class AsignarDocenteExamenComponent implements OnInit {
  displayedColumns = ['elegir','docente'];
  dataSource;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dialog:MatDialog,private _periodoService:PeriodosService,private _usuarioService:UsuarioService) {}
  env;
  ngOnInit(): void {
    this.getDocentes();
    this.env={
      "idperiodo":this.data.idperiodo,
      "idusuario":0
    }
  }
  Docente:Usuario ;

  getDocentes(){
    this._usuarioService.getDocentes().subscribe(Response=>{
      this.dataSource = Response;
      console.log(this.dataSource)

    })
  }
  asignarDocente(){
    this.env.idusuario = this.Docente.idusuario;
    this._periodoService.addDocente(this.env).subscribe(Response=>{
      this.dialog.closeAll();
    })
  }
}
