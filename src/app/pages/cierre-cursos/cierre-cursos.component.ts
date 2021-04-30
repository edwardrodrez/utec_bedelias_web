import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from '@angular/material/table';
import { CierreCursoModalComponent } from './cierre-curso-modal/cierre-curso-modal.component';
import { SecretarioService } from 'src/app/services/secretario.service';
import { Curso } from 'src/app/interfaces/curso';
import { Sede } from 'src/app/interfaces/sede';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';


export interface PeriodicElement {
  idperiodo:number;
  fechaFinal: string;
  fechanInicial: string;
  curso: Curso;
  sede : Sede;
}


@Component({
  selector: 'app-cierre-cursos',
  templateUrl: './cierre-cursos.component.html',
  styleUrls: ['./cierre-cursos.component.css']
})
export class CierreCursosComponent implements OnInit {

  dataSource : PeriodicElement[];
  columnsToDisplay = ['sede','curso','fechaInicial','fechaFinal','actions2'  ];
  expandedElement: PeriodicElement | null;
  selected;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  horizontalPositionError: MatSnackBarHorizontalPosition = 'center';
  verticalPositionError: MatSnackBarVerticalPosition = 'bottom';
  constructor(private _secretarioService : SecretarioService,private _snackBar: MatSnackBar,public dialog: MatDialog) {}

  ngOnInit(): void {
    this.selected = 'option1';
    this.getPeriodosLectivos();
  }
  getPeriodosLectivos(){
    this._secretarioService.getPeriodosLectivos().subscribe(Response=>{
      this.dataSource = Response;

    });
  }
  cerrarPeriodo(idperiodo){
    this.dialog.open(CierreCursoModalComponent,{data:idperiodo}).afterClosed().subscribe(Response=>{
     
      this.ngOnInit();
    });
  }

  openNotificacionUsuario(mensaje:string) {
    this._snackBar.open(mensaje, 'OK', {
      duration: 3000,
      panelClass: ['notificar-usuario'],
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
