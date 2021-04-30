import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Carrera } from 'src/app/interfaces/carrera';
import { Sede } from 'src/app/interfaces/sede';
import { CarreraService } from 'src/app/services/carrera.service';
import { SedeService } from 'src/app/services/sede.service';

@Component({
  selector: 'app-add-sede',
  templateUrl: './add-sede.component.html',
  styleUrls: ['./add-sede.component.css']
})
export class AddSedeComponent implements OnInit {
 
  constructor(private _carreraService:CarreraService,private _sedeService:SedeService,public dialog: MatDialog) { }
  sed:Sede;
  ides:{
    idsede:number,
    idcarrera:number
  }
  typesOfShoes:Carrera[];
  valorSelect:Number[];
  ngOnInit(): void { 
    this.sed = {
      nombre:"",
      direccion:{
        departamento:"",
        calle:"",
        ciudad:""
      }
    };
   this.getCarreras();
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
   postSede(){
     if(this.nombreFormControl.valid&&this.depFormControl.valid&&this.ciuFormControl.valid&&this.calFormControl.valid){
      this._sedeService.postSede(this.sed).subscribe(Response => {
        this.agregarCarreras(Response.idsede);
       });
     }

  };
  
  async agregarCarreras(id){  
    if(this.valorSelect != null && this.valorSelect[0] != null){
    for (const valor of this.valorSelect){   
      await this._sedeService.addCarrera({"idsede":id,"idcarrera":valor}).subscribe(Response=>{
      });
    };
  }
    this.dialog.closeAll();
  }

  getCarreras(){
    this._carreraService.getCarreras().subscribe(Response=>{
      this.typesOfShoes = Response;
    });
  };
 
}
