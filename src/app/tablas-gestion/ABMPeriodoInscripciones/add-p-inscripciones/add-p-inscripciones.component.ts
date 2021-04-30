import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { Carrera } from 'src/app/interfaces/carrera';
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
  selector: 'app-add-p-inscripciones',
  templateUrl: './add-p-inscripciones.component.html',
  styleUrls: ['./add-p-inscripciones.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class AddPInscripcionesComponent implements OnInit {

  ini:Date = new Date();
  fin:Date = new Date();
  dto;
  carrera:Carrera;
  carreras:Carrera[];
  constructor(private _CarreraService:CarreraService,private _InscripcionService:InscripcionService,public dialog: MatDialog) { }

  

  ngOnInit(): void {
    this.getCarreras();
    this.dto ={
      fechaInicial:"",
      fechaFinal:"",
      idcarrera:0
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

  crear(){
    this.dto.fechaFinal = formatDate(this.fin, 'yyyy-MM-dd', 'en-US');
    this.dto.fechaInicial = formatDate(this.ini, 'yyyy-MM-dd', 'en-US');
    this.dto.idcarrera = this.carrera[0].idcarrera;
    console.log(this.dto);
    if(this.fecha1FormControl.valid&&this.fecha2FormControl.valid){
      this._InscripcionService.createPeriodoDeInscripcion(this.dto).subscribe(Response=>{
        this.dialog.closeAll();
      })
    }

  }
  valorSelect;
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
}
