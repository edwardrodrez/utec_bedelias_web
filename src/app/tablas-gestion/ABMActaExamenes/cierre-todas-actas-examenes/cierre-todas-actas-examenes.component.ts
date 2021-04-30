import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CierreActasService } from 'src/app/services/cierre-actas.service';

export interface idperiodo {
  idperiodo: number;
}

@Component({
  selector: 'app-cierre-todas-actas-examenes',
  templateUrl: './cierre-todas-actas-examenes.component.html',
  styleUrls: ['./cierre-todas-actas-examenes.component.css']
})
export class CierreTodasActasExamenesComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private CierreS:CierreActasService,private dialog:MatDialog) { }
  idperiodo:idperiodo;
  ngOnInit(): void {
    this.idperiodo ={
      idperiodo : this.data
    }
  }

  cerrarActasAll(){
    this.CierreS.cerrarActasAll(this.idperiodo).subscribe(Response => {
    });
    this.dialog.closeAll();
  };

}
