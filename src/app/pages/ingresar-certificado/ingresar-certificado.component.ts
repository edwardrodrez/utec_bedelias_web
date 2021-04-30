import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SecretarioService } from 'src/app/services/secretario.service';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { Certificado } from 'src/app/interfaces/certificado';
import { formatDate } from '@angular/common';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
export interface PeriodicElement {
  idusuario:number;
  FechanInicial: string;
  fechaFinal: string;
}
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
  selector: 'app-ingresar-certificado',
  templateUrl: './ingresar-certificado.component.html',
  styleUrls: ['./ingresar-certificado.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class IngresarCertificadoComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar,public dialog: MatDialog,private _secretarioService : SecretarioService) { }
  ci:string="";
  dat:Date = new Date();
  dat2:Date = new Date();
  cer : Certificado;

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  horizontalPositionError: MatSnackBarHorizontalPosition = 'center';
  verticalPositionError: MatSnackBarVerticalPosition = 'bottom';
  ngOnInit(): void {
    this.cer = {
      idcertificado: null,
      FechaInicial: "", 
      fechaFinal: "",
      idusuario: null
    }
  }
  ciFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(8),
  ]);
  fecha1FormControl = new FormControl('', [
    Validators.required,
  ]);
  fecha2FormControl = new FormControl('', [
    Validators.required,
  ]);
  getEstudiante(){
    if(this.ciFormControl.valid&&this.fecha1FormControl.valid&&this.fecha2FormControl.valid){
    this._secretarioService.getUsuarioCi({ci:this.ci}).subscribe(Response=>{
      if(Response != null){} 
      this.addCertificado(Response.idusuario)
    })
  }
  }

 async addCertificado(id){
  this.cer.FechaInicial = formatDate(this.dat, 'yyyy-MM-dd', 'en-US');
  this.cer.fechaFinal = formatDate(this.dat2, 'yyyy-MM-dd', 'en-US');
  this.cer.idusuario = id;

    await  this._secretarioService.addCertificados(this.cer).subscribe(Response=>{
      this.dialog.closeAll();
      this.openNotificacionUsuario("Certificado Guardado");
    })
  

  }
 
  openNotificacionUsuario(mensaje:string) {
    this._snackBar.open(mensaje, 'OK', {
      duration: 3000,
      panelClass: ['notificar-usuario'],
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
