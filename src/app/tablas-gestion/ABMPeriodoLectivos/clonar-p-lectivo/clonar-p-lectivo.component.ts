import { formatDate } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Curso } from 'src/app/interfaces/curso';
import { Periodo } from 'src/app/interfaces/periodo';
import { Sede } from 'src/app/interfaces/sede';
import { Usuario } from 'src/app/interfaces/usuario';
import { CursoService } from 'src/app/services/curso.service';
import { PeriodosService } from 'src/app/services/periodos.service';
import { SedeService } from 'src/app/services/sede.service';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-clonar-p-lectivo',
  templateUrl: './clonar-p-lectivo.component.html',
  styleUrls: ['./clonar-p-lectivo.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class ClonarPLectivoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private _sedeService:SedeService,private _cursoService:CursoService,private dialog:MatDialog,private _periodoService:PeriodosService) { }
  
  curso:Curso[]=[];
  sede:Sede[]=[];
  ini:Date = new Date(this.data.fechaInicial);
  fin:Date = new Date(this.data.fechaFinal);
  Cursos:Curso[];
  Sedes:Sede[];
  ngOnInit(): void {
   
    this.getSedes();
    this.getCursos();
    this.ini.setDate(this.ini.getDate()+1);
    this.fin.setDate(this.fin.getDate()+1);
    this.curso[0] = this.data.curso;
    this.sede[0] = this.data.sede;
  }
  fecha1FormControl = new FormControl('', [
    Validators.required,
  ]);  
  fecha2FormControl = new FormControl('', [
    Validators.required,
  ]);  
  valorSelect;
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  getCursos(){
    this._cursoService.getCursos().subscribe(Response=>{
      this.Cursos = Response;
    })
  }
  getSedes(){
    this._sedeService.getSedes().subscribe(Response=>{
      this.Sedes = Response;
    })
  }
  crear(){
    this.data.fechaInicial = formatDate(this.ini, 'yyyy-MM-dd', 'en-US');
    this.data.fechaFinal = formatDate(this.fin, 'yyyy-MM-dd', 'en-US');
    this.data.idcurso = this.curso[0].idcurso;
    this.data.idsede = this.sede[0].idsede;
    console.log(this.data)
    if(this.fecha1FormControl.valid&&this.fecha2FormControl.valid){
    this._periodoService.postPeriodo(this.data).subscribe(Response=>{
      this.dialog.closeAll();
    })
  }
  }

}
