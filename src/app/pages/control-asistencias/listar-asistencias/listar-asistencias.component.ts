import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CalificarService } from 'src/app/services/calificar.service';


@Component({
  selector: 'app-listar-asistencias',
  templateUrl: './listar-asistencias.component.html',
  styleUrls: ['./listar-asistencias.component.css']
})
export class ListarAsistenciasComponent implements OnInit {
  displayedColumns = ['estudiante','asistio','inasistencias','porcentaje'];
  dataSource;
  val = 1;
  typesOfShoes: string[] = ['SI', 'NO'];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private calificarS:CalificarService,private dialog:MatDialog) {}
  favoriteSeason: string;
  seasons: string[] = ['SI', 'NO'];
  value: string[] = ['1', '2','3', '4','5', '6','7', '8','9', '10','11', '12',];
  ngOnInit(): void {
    this.getAssistencias()
  }

  getAssistencias(){
    this.calificarS.getAssistencias(this.data).subscribe(Response => {
      this.dataSource = Response;
      console.log(this.dataSource)
    });
  };

  addAssistencias(){
    this.calificarS.addAssistencias(this.dataSource).subscribe(Response => {
    this.dialog.closeAll();
    });
  };
}
