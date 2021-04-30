import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tiposdecurso } from 'src/app/interfaces/tipodecurso';
import { CursoService } from 'src/app/services/curso.service';
import { TipoDeCursoService } from 'src/app/services/tipo-de-curso.service';

@Component({
  selector: 'app-mod-curso',
  templateUrl: './mod-curso.component.html',
  styleUrls: ['./mod-curso.component.css']
})
export class ModCursoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private _tiposDeCursoService:TipoDeCursoService,private _cursoService:CursoService,public dialog: MatDialog) {
   }
  tipos:Tiposdecurso[];

  ngOnInit(): void {
    this.getTiposDeCurso();

  }
  nombreFormControl = new FormControl('', [
    Validators.required,
  ]);
  creFormControl = new FormControl('', [
    Validators.required,
  ]);
  getTiposDeCurso(){
    this._tiposDeCursoService.getTiposDeCurso().subscribe(Response=>{
      this.tipos = Response;
    })
  }
  putCurso(){
    if(this.nombreFormControl.valid&&this.creFormControl.valid){
    this._cursoService.putCurso(this.data).subscribe(Response=>{
      this.dialog.closeAll();
    });
  }
  }
  compareObjects(o1: any, o2: any): boolean {
    return o1.nombre === o2.nombre && o1.idtiposDeCurso === o2.idtiposDeCurso;
  }
}
