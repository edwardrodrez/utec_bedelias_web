import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TipoDeCursoService } from 'src/app/services/tipo-de-curso.service';

@Component({
  selector: 'app-elim-tipodecurso',
  templateUrl: './elim-tipodecurso.component.html',
  styleUrls: ['./elim-tipodecurso.component.css']
})
export class ElimTipodecursoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _tipoDeCursoService:TipoDeCursoService,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteTipoDeCurso(){
    this._tipoDeCursoService.deleteTipoDeCurso(this.data.idtiposDeCurso).subscribe(Response=>{
      this.dialog.closeAll();
    })
  }
}
