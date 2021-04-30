import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Carrera } from 'src/app/interfaces/carrera';
import { Curso } from 'src/app/interfaces/curso';
import { CarreraService } from 'src/app/services/carrera.service';

@Component({
  selector: 'app-quitar-cursos-carrera',
  templateUrl: './quitar-cursos-carrera.component.html',
  styleUrls: ['./quitar-cursos-carrera.component.css']
})
export class QuitarCursosCarreraComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _carreraService:CarreraService,public dialog: MatDialog) { }

  ngOnInit(): void {
  
  }

  quitarCurso(){
    var enviar = {
      "idcarrera":this.data.car.idcarrera,
      "idcurso":this.data.cur.idcurso
    }
    console.log(enviar);
    this._carreraService.quitCurso(enviar).subscribe(Response=>{

    });
    this.dialog.closeAll();
  }
}
