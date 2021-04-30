import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from '@angular/material/table';
import { CierreActasExamenesComponent } from '../cierre-actas-examenes/cierre-actas-examenes.component';
import { CierreTodasActasExamenesComponent } from '../cierre-todas-actas-examenes/cierre-todas-actas-examenes.component';
import { CierreActasService } from 'src/app/services/cierre-actas.service';

@Component({
  selector: 'app-listar-actas-examenes',
  templateUrl: './listar-actas-examenes.component.html',
  styleUrls: ['./listar-actas-examenes.component.css']
})
export class ListarActasExamenesComponent implements OnInit {


  dataSource;
  columnsToDisplay = ['fechaInicio','sede','curso','actions'  ];
  expandedElement;
  typesOfShoes;
  selected;
  constructor(public dialog: MatDialog,private CierreS:CierreActasService) {}

  ngOnInit(): void {
    this.selected = 0;
    this.getExamenes();
  }
  cierreActa(id){
    this.dialog.open(CierreActasExamenesComponent,{data:id}).afterClosed().subscribe(Response=>{
      this.getExamenes();
    });;
  }
  cierreActaTodas(id){
    this.dialog.open(CierreTodasActasExamenesComponent,{data:id}).afterClosed().subscribe(Response=>{
      this.getExamenes();
    });;
  }

  getExamenes(){
    this.CierreS.getExsamenesAdmin().subscribe(Response => {
      this.typesOfShoes = Response;
    });
  };

  getActa(id){
    this.selected = id;
    this.CierreS.getActas(id).subscribe(Response => {
      this.dataSource = Response;
    });
  };

}
