import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { Curso } from 'src/app/interfaces/curso';
import { Periodo } from 'src/app/interfaces/periodo';
import { Sede } from 'src/app/interfaces/sede';
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
  selector: 'app-add-p-lectivo',
  templateUrl: './add-p-lectivo.component.html',
  styleUrls: ['./add-p-lectivo.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class AddPLectivoComponent implements OnInit {
peri:Periodo;
curso:Curso;
sede:Sede;
ini:Date = new Date();
fin:Date = new Date();
Cursos:Curso[];
Sedes:Sede[];
  constructor(private _sedeService:SedeService,private _cursoService:CursoService,private dialog:MatDialog,private _periodoService:PeriodosService) { }

  ngOnInit(): void {
    this.peri={
      fechaFinal : "",
      fechaInicial :"",
      tipo :"lectivo",
      idcurso:0,
      idsede:0,
      
    }
    this.getSedes();
    this.getCursos();
  }
  fecha1FormControl = new FormControl('', [
    Validators.required,
  ]);  
  fecha2FormControl = new FormControl('', [
    Validators.required,
  ]);  
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
    this.peri.fechaInicial = formatDate(this.ini, 'yyyy-MM-dd', 'en-US');
    this.peri.fechaFinal = formatDate(this.fin, 'yyyy-MM-dd', 'en-US');
    this.peri.idcurso = this.curso[0].idcurso;
    this.peri.idsede = this.sede[0].idsede;
    if(this.fecha1FormControl.valid&&this.fecha2FormControl.valid){
    this._periodoService.postPeriodo(this.peri).subscribe(Response=>{
      this.dialog.closeAll();
    })
  }
  }
  valorSelect;
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
}
