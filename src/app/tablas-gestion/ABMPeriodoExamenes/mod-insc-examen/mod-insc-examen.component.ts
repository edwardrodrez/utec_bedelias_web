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
  selector: 'app-mod-insc-examen',
  templateUrl: './mod-insc-examen.component.html',
  styleUrls: ['./mod-insc-examen.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class ModInscExamenComponent implements OnInit {

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
    if(this.data.fechainscripcion != null){
      this.ini = new Date(this.data.fechainscripcion.fechaInicial);
      this.fin = new Date(this.data.fechainscripcion.fechaFinal);
      this.ini.setDate(this.ini.getDate()+1);
      this.fin.setDate(this.fin.getDate()+1);
    }
  }
  fecha1FormControl = new FormControl('', [
    Validators.required,
  ]); 
  fecha2FormControl = new FormControl('', [
    Validators.required,
  ]); 
  update(){
    if(this.fecha1FormControl.valid&&this.fecha2FormControl.valid){
    if(this.data.fechainscripcion != null){
      this.env.fechaInicial = formatDate(this.ini, 'yyyy-MM-dd', 'en-US');
      this.env.fechaFinal = formatDate(this.fin, 'yyyy-MM-dd', 'en-US');

      this._periodoService.updatefechainscripcion(this.env).subscribe(Response=>{
        this.dialog.closeAll();
      })
    }
    else{
      this.dialog.closeAll();
    }
    
  }

  }
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  valorSelect;
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
}
