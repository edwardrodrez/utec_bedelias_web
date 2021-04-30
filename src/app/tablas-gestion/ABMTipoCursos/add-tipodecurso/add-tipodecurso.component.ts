import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TipoDeCursoService } from 'src/app/services/tipo-de-curso.service';

@Component({
  selector: 'app-add-tipodecurso',
  templateUrl: './add-tipodecurso.component.html',
  styleUrls: ['./add-tipodecurso.component.css']
})
export class AddTipodecursoComponent implements OnInit {

  nombre:String;
  constructor(private _tipoDeCursoService:TipoDeCursoService,public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  nombreFormControl = new FormControl('', [
    Validators.required,
  ]);
  postTipoDeCurso(){
    if(this.nombreFormControl.valid){
      this._tipoDeCursoService.postTipoDeCurso({nombre:this.nombre}).subscribe(Response=>{
        this.dialog.closeAll();
      })
    }

  }
}
