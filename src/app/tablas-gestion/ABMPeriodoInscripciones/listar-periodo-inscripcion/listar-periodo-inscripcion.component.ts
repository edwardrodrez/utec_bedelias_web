import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { AddPInscripcionesComponent } from '../add-p-inscripciones/add-p-inscripciones.component';
import { ElimPInscripcionesComponent } from '../elim-p-inscripciones/elim-p-inscripciones.component';
import { ModPInscripcionesComponent } from '../mod-p-inscripciones/mod-p-inscripciones.component';
import {MatDialog} from '@angular/material/dialog';
import { InscripcionService } from 'src/app/services/inscripcion.service';
import { Inscripcion } from 'src/app/interfaces/inscripcion';
import { element } from 'protractor';
import { VerPostulanteComponent } from '../../Postulantes/ver-postulante/ver-postulante.component';
import { periododeincripciones } from 'src/app/interfaces/periododeincripciones';
import { ActivatedRoute, Router } from '@angular/router';


export interface PeriodicElement {
  fechaInicial: string;
  fechaFinal: string;
  carrera : string;
}


@Component({
  selector: 'app-listar-periodo-inscripcion',
  templateUrl: './listar-periodo-inscripcion.component.html',
  styleUrls: ['./listar-periodo-inscripcion.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListarPeriodoInscripcionComponent implements OnInit {
  dataSource ;
  actual:periododeincripciones;
  solicitudes:Inscripcion[];
  columnsToDisplay = ['fechaInicial','fechaFinal','carrera','actions'];
  expandedElement: PeriodicElement | null;
  constructor(public dialog: MatDialog,private _servicePeriodo:InscripcionService,private router: Router) {}

  ngOnInit(): void {
    this.getPeriodos();
  }

  //ABM CRUDD
  addInscripcion(){
    this.dialog.open(AddPInscripcionesComponent).afterClosed().subscribe(Response=>{
      this.getPeriodos();
    });
  }
  elimInscripcion(elem){
    console.log(elem)
    this.dialog.open(ElimPInscripcionesComponent,{data:elem}).afterClosed().subscribe(Response=>{
      this.getPeriodos();
    });
  }
  modInscripcion(elem){
    this.dialog.open(ModPInscripcionesComponent,{data:elem}).afterClosed().subscribe(Response=>{
      this.getPeriodos();
    });
  }

  getPeriodos(){
    this._servicePeriodo.getPeriosdoDeInscripcion().subscribe(Response=>{
      this.dataSource = Response;
      console.log(this.dataSource)
    })

    
  }

  postulante(element){
    this.router.navigate(['/SolicitudPostulante', {p1:element , p2:this.actual.carrera.nombre }]);
  }


  getSolicitudes(element){
    this.solicitudes = element.inscripciones;
    this.actual = element;
  }
}