import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from '@angular/material/table';
import { CierreActasCursosComponent } from '../cierre-actas-cursos/cierre-actas-cursos.component';
import { CierreTodasActasComponent } from '../cierre-todas-actas/cierre-todas-actas.component';
import { CierreActasService } from 'src/app/services/cierre-actas.service';


@Component({
  selector: 'app-listar-actas-cursos',
  templateUrl: './listar-actas-cursos.component.html',
  styleUrls: ['./listar-actas-cursos.component.css']
})
export class ListarActasCursosComponent implements OnInit {

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
    this.dialog.open(CierreActasCursosComponent,{data:id}).afterClosed().subscribe(Response=>{
      this.getExamenes();
    });;
  }
  cierreActaTodas(id){
    this.dialog.open(CierreTodasActasComponent,{data:id}).afterClosed().subscribe(Response=>{
      this.getExamenes();
    });;
  }

  getExamenes(){
    this.CierreS.getLectivosAdmin().subscribe(Response => {
      this.typesOfShoes = Response;
      if(this.typesOfShoes[0]!=null){
          this.listarTodo(this.typesOfShoes[0])
      }
    });
  };
  listarTodo(per){
    console.log(per.idperiodo)
      this.getActa(per.idperiodo);
  }
  getActa(id){
    this.selected = id;
    this.CierreS.getActas(id).subscribe(Response => {
      this.dataSource = Response;
    });
  };

}
