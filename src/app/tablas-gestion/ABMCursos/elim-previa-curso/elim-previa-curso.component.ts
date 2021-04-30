import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-elim-previa-curso',
  templateUrl: './elim-previa-curso.component.html',
  styleUrls: ['./elim-previa-curso.component.css']
})
export class ElimPreviaCursoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private _cursoService:CursoService,
  public dialog: MatDialog,private dialogRef: MatDialogRef<ElimPreviaCursoComponent>) { }

  ngOnInit(): void {
  }

  quitPrevia(){
    console.log({idcurso:this.data.idcurso,idprevia:this.data.idprevia});
    this._cursoService.quitPrevia({idcurso:this.data.idcurso,idprevia:this.data.idprevia}).subscribe(Response=>{
      
    })
    this.dialogRef.close();
  }
}
