import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA ,MatDialogRef } from '@angular/material/dialog';

import { Carrera } from 'src/app/interfaces/carrera';
import { CarreraService } from 'src/app/services/carrera.service';
import { SedeService } from 'src/app/services/sede.service';

@Component({
  selector: 'app-incluir-carrera',
  templateUrl: './incluir-carrera.component.html',
  styleUrls: ['./incluir-carrera.component.css']
})
export class IncluirCarreraComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private _carreraService:CarreraService,private _sedeService:SedeService,
  public dialog: MatDialog,private dialogRef: MatDialogRef<IncluirCarreraComponent>) { }
  carreras:Carrera[];
  listadas:Carrera[]=[];
  valorSelect:Carrera[]=[];
  ngOnInit(): void {
    this.carreras = this.data.carreras;
    this.getcarreras();
  }
  getcarreras(){
    this._carreraService.getCarreras().subscribe(Response => {
      Response.forEach(element => {
          if(!this.carreras.some(e => e.idcarrera === element.idcarrera))
            this.listadas.push(element);
      });
    });
  };

  agregarCarreras(){
    this.valorSelect.forEach(element => {   
      this._sedeService.addCarrera({"idsede":this.data.idsede,"idcarrera": element.idcarrera}).subscribe(Response=>{
      });
     
    });
    this.dialogRef.close(this.valorSelect);
    
  }

  
}
