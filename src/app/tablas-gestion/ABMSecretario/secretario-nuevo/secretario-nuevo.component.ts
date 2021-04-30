import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Direccion } from 'src/app/interfaces/direccion';
import { Persona } from 'src/app/interfaces/persona';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

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
  selector: 'app-secretario-nuevo',
  templateUrl: './secretario-nuevo.component.html',
  styleUrls: ['./secretario-nuevo.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class SecretarioNuevoComponent implements OnInit {

  selected;
  per:Persona;
  usu:Usuario;
  dir:Direccion;
  dat:Date = new Date();
  myControl = new FormControl();
  options: string[] = ['Artigas','Canelones', 'Colonia','Cerro Largo', 'Durazno', 'Flores', 'Florida', 'Lavalleja', 'Maldonado', 'Montevideo', 'Paysandu', 'Rio Negro', 'Rivera', 'Rocha', 'Salto','San Jose', 'Soriano', 'Tacuarembo', 'Treinta y Tres'];
  filteredOptions: Observable<string[]>;
  constructor(private _UsuarioService:UsuarioService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dir = {
      calle :"",
      ciudad:"",
      departamento:""
    }

    this.per ={
      ci : "",
      apellido : "",
      correo : "",
      fechaDeNacimiento :"",
      nombre : "",
      sexo : "",
      telefono : "",
      direccion : this.dir,
      idinscripcion : null
    }

    this.usu ={
      persona :this.per,
      password : ""
    }
    
    this.per.sexo = 'Masculino';

    this.filteredOptions = this.myControl.valueChanges.pipe(
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


  create(){
    this.per.fechaDeNacimiento = formatDate(this.dat, 'yyyy-MM-dd', 'en-US');
    if(this.nomFormControl.valid&&this.apeFormControl.valid&&this.ciFormControl.valid&&this.dirFormControl.valid&&this.ciuFormControl.valid&&this.depFormControl.valid&&this.emeFormControl.valid&&this.fecha1FormControl.valid){
    this._UsuarioService.postUsuario(this.usu).subscribe(Response=>{
      this._UsuarioService.addSecretario(Response.idusuario).subscribe(Response=>{
        this.dialog.closeAll();
      })
    })
  }
  }
  

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  valorSelect;
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}
