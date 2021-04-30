import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Sede } from 'src/app/interfaces/sede';
import { SedeService } from 'src/app/services/sede.service';

@Component({
  selector: 'app-modificar-sede',
  templateUrl: './modificar-sede.component.html',
  styleUrls: ['./modificar-sede.component.css']
})
export class ModificarSedeComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _sedeService:SedeService,public dialog: MatDialog) { }
sed:Sede = this.data;
  ngOnInit(): void {
  }
  nombreFormControl = new FormControl('', [
    Validators.required,
  ]);
  depFormControl = new FormControl('', [
    Validators.required,
  ]);
  ciuFormControl = new FormControl('', [
    Validators.required,
  ]);
  calFormControl = new FormControl('', [
    Validators.required,
  ]);
  putSede(){
    if(this.nombreFormControl.valid&&this.depFormControl.valid&&this.ciuFormControl.valid&&this.calFormControl.valid){
    this._sedeService.putSede(this.sed).subscribe(Response =>{
    
    });
    this.dialog.closeAll();
  }

  }
 
}
