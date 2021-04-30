import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AreaDeEstudioService } from 'src/app/services/area-de-estudio.service';

@Component({
  selector: 'app-quitar-cursos-area',
  templateUrl: './quitar-cursos-area.component.html',
  styleUrls: ['./quitar-cursos-area.component.css']
})
export class QuitarCursosAreaComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private _AreaDeEstudioService:AreaDeEstudioService,public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  quitCurso(){
    this._AreaDeEstudioService.quitCurso({idcurso:this.data.curso.idcurso,idareaDeEstudio:this.data.area.idareadeestudio}).subscribe(Response=>{

    })
    this.dialog.closeAll();
  }
}
