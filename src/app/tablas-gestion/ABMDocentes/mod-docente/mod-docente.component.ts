import { formatDate } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
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
  selector: 'app-mod-docente',
  templateUrl: './mod-docente.component.html',
  styleUrls: ['./mod-docente.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS}
  ]
})
export class ModDocenteComponent implements OnInit {


  selected;
  myControl = new FormControl();
  options: string[] = ['Artigas','Canelones', 'Colonia','Cerro Largo', 'Durazno', 'Flores', 'Florida', 'Lavalleja', 'Maldonado', 'Montevideo', 'Paysandu', 'Rio Negro', 'Rivera', 'Rocha', 'Salto','San Jose', 'Soriano', 'Tacuarembo', 'Treinta y Tres'];
  filteredOptions: Observable<string[]>;
  constructor(@Inject(MAT_DIALOG_DATA) public data: Usuario,private _UsuarioService:UsuarioService,private dialog:MatDialog) { }
  dat:Date;
  ngOnInit(): void {
    this.dat = new Date(this.data.persona.fechaDeNacimiento);
    this.dat.setDate(this.dat.getDate()+1);

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
  putDocente(){
    this.data.persona.fechaDeNacimiento = formatDate(this.dat, 'yyyy-MM-dd', 'en-US');
    if(this.nomFormControl.valid&&this.apeFormControl.valid&&this.ciFormControl.valid&&this.dirFormControl.valid&&this.ciuFormControl.valid&&this.depFormControl.valid&&this.emeFormControl.valid&&this.fecha1FormControl.valid){
    this._UsuarioService.edit(this.data).subscribe(Response=>{
      this.dialog.closeAll();
    })
  }
  }






  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}
