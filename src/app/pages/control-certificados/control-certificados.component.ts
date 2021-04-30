import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  fechaInicial: string;
  fechaFinal: string;
  usuario: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {fechaInicial: '07/10/2020' , fechaFinal: '08/10/2020', usuario:'Pepito Ramirez'},
  {fechaInicial: '07/10/2020' , fechaFinal: '08/10/2020', usuario:'Pepito Ramirez'},
  {fechaInicial: '07/10/2020' , fechaFinal: '08/10/2020', usuario:'Pepito Ramirez'},
  {fechaInicial: '07/10/2020' , fechaFinal: '08/10/2020', usuario:'Pepito Ramirez'},
  {fechaInicial: '07/10/2020' , fechaFinal: '08/10/2020', usuario:'Pepito Ramirez'},
  {fechaInicial: '07/10/2020' , fechaFinal: '08/10/2020', usuario:'Pepito Ramirez'},
  {fechaInicial: '07/10/2020' , fechaFinal: '08/10/2020', usuario:'Pepito Ramirez'},
  {fechaInicial: '07/10/2020' , fechaFinal: '08/10/2020', usuario:'Pepito Ramirez'},
];
@Component({
  selector: 'app-control-certificados',
  templateUrl: './control-certificados.component.html',
  styleUrls: ['./control-certificados.component.css']
})
export class ControlCertificadosComponent implements OnInit {
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  columnsToDisplay = ['fechaInicial','fechaFinal','usuario' ];
  expandedElement: PeriodicElement | null;
  selected;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

}
