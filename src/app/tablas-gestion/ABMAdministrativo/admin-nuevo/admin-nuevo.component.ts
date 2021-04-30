import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Direccion } from 'src/app/interfaces/direccion';
import { Persona } from 'src/app/interfaces/persona';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { formatDate } from '@angular/common';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
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
  selector: 'app-admin-nuevo',
  templateUrl: './admin-nuevo.component.html',
  styleUrls: ['./admin-nuevo.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class AdminNuevoComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  horizontalPositionError: MatSnackBarHorizontalPosition = 'center';
  verticalPositionError: MatSnackBarVerticalPosition = 'bottom';
  constructor(private _UsuarioService:UsuarioService,private _snackBar: MatSnackBar,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dir = {
      calle :"Batlle berrer 876",
      ciudad:"San Jose de mayo",
      departamento:""
    }

    this.per ={
      ci : "47344508",
      apellido : "Rodriguez",
      correo : "edward.rodriguez@utec.edu.uy",
      fechaDeNacimiento :"",
      nombre : "Edward",
      sexo : "",
      telefono : "099239923",
      direccion : this.dir,
      idinscripcion : null
    }

    this.usu ={
      persona :this.per,
      password : ""
    }

    this.per.sexo = 'Masculino';

    this.filteredOptions = this.depFormControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  nomFormControl = new FormControl('', [
    Validators.required,
  ]);
  ciFormControl = new FormControl('', [
    Validators.required,
  ]);
  apeFormControl = new FormControl('', [
    Validators.required,
  ]);
  emeFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  telFormControl = new FormControl('', [
    Validators.required,
  ]);
  fecha1FormControl = new FormControl('', [
    Validators.required,
  ]);
  depFormControl = new FormControl('', [
    Validators.required,
  ]);
  ciuFormControl = new FormControl('', [
    Validators.required,
  ]);
  dirFormControl = new FormControl('', [
    Validators.required,
  ]);
  options: string[] = ['Artigas','Canelones', 'Colonia','Cerro Largo', 'Durazno', 'Flores', 'Florida', 'Lavalleja', 'Maldonado', 'Montevideo', 'Paysandu', 'Rio Negro', 'Rivera', 'Rocha', 'Salto','San Jose', 'Soriano', 'Tacuarembo', 'Treinta y Tres'];
  filteredOptions: Observable<string[]>;

  per:Persona;
  usu:Usuario;
  dir:Direccion;
  dat:Date = new Date();


  //date = new FormControl(new Date());
  //serializedDate = new FormControl((new Date()).toISOString());



create(){

  this.per.fechaDeNacimiento = formatDate(this.dat, 'yyyy-MM-dd', 'en-US');
  if(this.nomFormControl.valid&&this.apeFormControl.valid&&this.ciFormControl.valid&&this.dirFormControl.valid&&this.ciuFormControl.valid&&this.depFormControl.valid&&this.emeFormControl.valid&&this.fecha1FormControl.valid){
  this._UsuarioService.postUsuario(this.usu).subscribe(Response=>{
    this._UsuarioService.addAdmin(Response.idusuario).subscribe(Response=>{
      this.dialog.closeAll();
      this.openNotificacionUsuario("Un nuevo Admin ah sido creado");
    })
  })
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
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

}
