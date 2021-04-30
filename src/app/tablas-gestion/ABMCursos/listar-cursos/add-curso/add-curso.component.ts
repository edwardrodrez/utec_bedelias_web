import { Component, OnInit } from '@angular/core';
import { Tiposdecurso } from 'src/app/interfaces/tipodecurso';
import { TipoDeCursoService } from 'src/app/services/tipo-de-curso.service';
import { Curso } from 'src/app/interfaces/curso';
import { CursoService } from 'src/app/services/curso.service';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-curso',
  templateUrl: './add-curso.component.html',
  styleUrls: ['./add-curso.component.css']
})
export class AddCursoComponent implements OnInit {

  constructor(private _tiposDeCursoService:TipoDeCursoService,private _cursoService:CursoService,public dialog: MatDialog) { }
  tipos:Tiposdecurso[];
  cur;
  ngOnInit(): void {
    
    this.cur={
      nombre:"",
      credito:null,
      tiposdecurso:{
        idtiposDeCurso:null,
        nombre:""
      }
      
    }
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
      this.cur.tiposdecurso = Response[0];
    })
  }

  postCurso(){
    if(this.nombreFormControl.valid&&this.creFormControl.valid){
      this._cursoService.postCurso(this.cur).subscribe(Response=>{
        this.dialog.closeAll();
      });
    }

  }
}
