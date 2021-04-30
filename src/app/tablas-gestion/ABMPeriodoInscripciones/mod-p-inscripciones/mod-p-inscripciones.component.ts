import { formatDate } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Carrera } from 'src/app/interfaces/carrera';
import { periododeincripciones } from 'src/app/interfaces/periododeincripciones';
import { CarreraService } from 'src/app/services/carrera.service';
import { InscripcionService } from 'src/app/services/inscripcion.service';

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
  selector: 'app-mod-p-inscripciones',
  templateUrl: './mod-p-inscripciones.component.html',
  styleUrls: ['./mod-p-inscripciones.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class ModPInscripcionesComponent implements OnInit {
  ini:Date ;
  fin:Date;
  dto;
  carrera:Carrera[] = new Array;
  carreras:Carrera[];
  constructor(@Inject(MAT_DIALOG_DATA) public data: periododeincripciones, private _CarreraService:CarreraService,private _InscripcionService:InscripcionService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCarreras();
    this.ini = new Date(this.data.fechaInicial); 
    this.ini.setDate(this.ini.getDate()+1);
    this.fin = new Date(this.data.fechaFinal);
    this.fin.setDate(this.fin.getDate()+1);
    this.carrera[0] = this.data.carrera;
    this.dto ={
      fechaInicial:"",
      fechaFinal:"",
      idcarrera:0,
      id:this.data.idperiododeincripciones
    }
  }
  fecha1FormControl = new FormControl('', [
    Validators.required,
  ]);  
  fecha2FormControl = new FormControl('', [
    Validators.required,
  ]); 

  getCarreras(){
    this._CarreraService.getCarreras().subscribe(Response=>{
      this.carreras = Response;
    })
  }

  update(){
    this.dto.fechaFinal = formatDate(this.fin, 'yyyy-MM-dd', 'en-US');
    this.dto.fechaInicial = formatDate(this.ini, 'yyyy-MM-dd', 'en-US');
    this.dto.idcarrera = this.carrera[0].idcarrera;
    if(this.fecha1FormControl.valid&&this.fecha2FormControl.valid){
    this._InscripcionService.updatePeriodoDeInscripcion(this.dto).subscribe(Response=>{
      this.dialog.closeAll();
    });
  }
  }

  valorSelect;
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
}
