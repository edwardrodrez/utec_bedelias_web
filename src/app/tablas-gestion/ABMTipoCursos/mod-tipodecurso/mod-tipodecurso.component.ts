import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TipoDeCursoService } from 'src/app/services/tipo-de-curso.service';

@Component({
  selector: 'app-mod-tipodecurso',
  templateUrl: './mod-tipodecurso.component.html',
  styleUrls: ['./mod-tipodecurso.component.css']
})
export class ModTipodecursoComponent implements OnInit {
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _tipoDeCursoService:TipoDeCursoService,public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  nombreFormControl = new FormControl('', [
    Validators.required,
  ]);
  putTipoDeCurso(){
    if(this.nombreFormControl.valid){
      this._tipoDeCursoService.putTipoDeCurso(this.data).subscribe(Response=>{
        this.dialog.closeAll();
      });
    }

  }
}
