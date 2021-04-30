import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Curso } from 'src/app/interfaces/curso';
import { Previa } from 'src/app/interfaces/previa';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-add-previa-curso',
  templateUrl: './add-previa-curso.component.html',
  styleUrls: ['./add-previa-curso.component.css']
})
export class AddPreviaCursoComponent implements OnInit {
  selected='Previa Aprobada';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private _cursoService:CursoService,
  public dialog: MatDialog,private dialogRef: MatDialogRef<AddPreviaCursoComponent>) { }

  typesOfShoes:Curso = this.data.cursos;
  valorSelect;
  previa:Previa;
  cursoP;
  ngOnInit(): void {
    this.previa={
      tipoPrevia:"",
      idcarrera:this.data.idcarrera,
      idcurso:this.data.idcurso,
      idcursoprevio:0
    }
    this.previa.tipoPrevia = "Previa Aprobada";

  }

  addPrevia(){
    if(this.cursoP != null && this.cursoP[0] != null)
      this.previa.idcursoprevio = this.cursoP[0].idcurso;
    console.log(this.previa);
    this._cursoService.addPrevia(this.previa).subscribe(Response=>{

    });
    this.dialogRef.close()
  }
 
}