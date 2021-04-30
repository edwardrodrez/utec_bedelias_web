import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CursoService } from 'src/app/services/curso.service';
import { TipoDeCursoService } from 'src/app/services/tipo-de-curso.service';

@Component({
  selector: 'app-elim-curso',
  templateUrl: './elim-curso.component.html',
  styleUrls: ['./elim-curso.component.css']
})
export class ElimCursoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private _tiposDeCursoService:TipoDeCursoService,
              private _cursoService:CursoService,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteCurso(){
    this._cursoService.deleteCurso(this.data.idcurso).subscribe(Response=>{
      this.dialog.closeAll();
    })
  }
}
