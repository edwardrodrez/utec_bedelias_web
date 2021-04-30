import { formatDate } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PeriodosService } from 'src/app/services/periodos.service';

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
  selector: 'app-establecer-fecha-insc',
  templateUrl: './establecer-fecha-insc.component.html',
  styleUrls: ['./establecer-fecha-insc.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class EstablecerFechaInscComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dialog:MatDialog,private _periodoService:PeriodosService) { }
  ini:Date = new Date();
  fin:Date = new Date();
  env;
  ngOnInit(): void {
    this.env={
      "fechaInicial":"",
      "fechaFinal":"",
     "idperiodo":this.data.idperiodo
    }

  } 
  fecha1FormControl = new FormControl('', [
    Validators.required,
  ]);  
  fecha2FormControl = new FormControl('', [
    Validators.required,
  ]);  
  confirmar(){
    this.env.fechaInicial = formatDate(this.ini, 'yyyy-MM-dd', 'en-US');
    this.env.fechaFinal = formatDate(this.fin, 'yyyy-MM-dd', 'en-US');
    if(this.fecha1FormControl.valid&&this.fecha2FormControl.valid){
    this._periodoService.addfechainscripcion(this.env).subscribe(Response=>{
      this.dialog.closeAll();
    })
  }
  }

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  valorSelect;
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
}
