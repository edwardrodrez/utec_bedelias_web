import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ngx-captcha';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { Certificado } from 'src/app/interfaces/certificado';
import { formatDate } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
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
  selector: 'app-validar-escolaridad',
  templateUrl: './validar-escolaridad.component.html',
  styleUrls: ['./validar-escolaridad.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class ValidarEscolaridadComponent implements OnInit {
  aFormGroup: FormGroup;
  siteKey;
  theme;
  dat:Date = new Date();
  cod = {
    codigo: "string"
  }
  escgen = {
    codigo: "",
    fechaExpiracion: "",
    pdf: "asd"
  }
  BlobUri;
  codigoescolaridad;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  horizontalPositionError: MatSnackBarHorizontalPosition = 'center';
  verticalPositionError: MatSnackBarVerticalPosition = 'bottom';
  constructor(private _snackBar: MatSnackBar,private _estudianteService : EstudianteService,private formBuilder: FormBuilder, private reCaptchaV3Service: ReCaptchaV3Service) {
    this.siteKey = "6Ler2doZAAAAAOm-JgXIesBjRjOU5YmbbyNlbLPE";
    this.theme = "light";
  }

  ngOnInit(): void {

    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required],
    });
  }
  
  codigo = new FormControl('', [
    Validators.required,
  ]);
  validarEscolaridad(){
    if(this.codigo.valid&&this.aFormGroup.valid){
      this.cod.codigo = this.codigoescolaridad;
      this._estudianteService.getEscolaridadPdf(this.cod).subscribe(Response=>{
        this.openNotificacionUsuario("Escolaridad Valida, espere un momento..");
        setTimeout(()=> {
          var st = Response.split(",").pop()
          const byteArray = new Uint8Array(atob(st).split('').map(char => char.charCodeAt(0)));
          var b = new Blob([byteArray], {type: 'application/pdf'});
  
          const url = window.URL.createObjectURL(b);
          window.open(url);
        }, 2000);    


  

  
        
      },(err:HttpErrorResponse)=>{
        this.openNotificacionError(err.error);
      });

    }

  }

  openNotificacionUsuario(mensaje:string) {
    this._snackBar.open(mensaje, 'OK', {
      duration: 3000,
      panelClass: ['notificar-usuario'],
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
  openNotificacionError(mensaje:string) {
    this._snackBar.open(mensaje, 'ERROR', {
      duration: 5000,
      panelClass: ['notificar-error'],
      horizontalPosition: this.horizontalPositionError,
      verticalPosition: this.verticalPositionError,
    });
  }
  
}
