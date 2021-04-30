import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { EliminarSedeComponent } from '../eliminar-sede/eliminar-sede.component';
import {MatDialog ,MatDialogRef} from '@angular/material/dialog';
import { ModificarSedeComponent } from '../modificar-sede/modificar-sede.component';
import { AddSedeComponent } from '../add-sede/add-sede.component';
import { IncluirCarreraComponent } from '../incluir-carrera/incluir-carrera.component';
import { Sede } from 'src/app/interfaces/sede';
import { SedeService } from 'src/app/services/sede.service';
import { QuitarCarrerasSedeComponent } from '../quitar-carreras-sede/quitar-carreras-sede.component';
import { Carrera } from 'src/app/interfaces/carrera';




@Component({
  selector: 'app-listar-sedes',
  templateUrl: './listar-sedes.component.html',
  styleUrls: ['./listar-sedes.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class ListarSedesComponent implements OnInit {
  incluiCarreraDialogRef: MatDialogRef<IncluirCarreraComponent>;
  dataSource : Sede[];
  sed:Sede ;
  carreras:Carrera[];
  columnsToDisplay = ['nombre','departamento','ciudad','calle','actions'];
  expandedElement: Sede| null;
  constructor(private _sedeService:SedeService,public dialog: MatDialog) {}

  ngOnInit(): void {
   this.getSedes();    
  }


  //ABM CRUDD
  addSede(){
    this.dialog.open(AddSedeComponent).afterClosed().subscribe(Response => {
      this.getSedes();
    });
    
  }

  elimSede(idsede){
    this.dialog.open(EliminarSedeComponent,{ data:{idsede:idsede}}).afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  modSede(element){
    this.dialog.open(ModificarSedeComponent,{ data:element}).afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
  
  incluirCarreras(){
   this.incluiCarreraDialogRef = this.dialog.open(IncluirCarreraComponent,{data:this.sed});
   this.incluiCarreraDialogRef.afterClosed().subscribe(Response => {
     if(Response != null && Response[0] != null)
       this.carreras = this.carreras.concat(Response);
       this.sed.carreras = this.carreras;
    });
  }

  quitarCarreras(carre){
    this.dialog.open(QuitarCarrerasSedeComponent,{data:{"idsede":this.sed.idsede,"idcarrera":carre.idcarrera}}).afterClosed().subscribe(Response=>{  
      const index: number = this.carreras.indexOf(carre);
      if (index !== -1) {
        this.carreras.splice(index, 1);
      }     
    });  
  }

  carrerasSede(element){
    this.sed = element;
    this.carreras = element.carreras;
  }

  getSedes(){
    this._sedeService.getSedes().subscribe(Response => {
      this.dataSource = Response;
      if(this.dataSource != null && this.dataSource[0] != null)
        this.carrerasSede(this.dataSource[0]);
    });
  };
  
}
