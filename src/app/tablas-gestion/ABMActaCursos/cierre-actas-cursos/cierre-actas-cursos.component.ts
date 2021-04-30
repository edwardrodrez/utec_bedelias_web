import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CierreActasService } from 'src/app/services/cierre-actas.service';

export interface idacta {
  idacta: number;
}

@Component({
  selector: 'app-cierre-actas-cursos',
  templateUrl: './cierre-actas-cursos.component.html',
  styleUrls: ['./cierre-actas-cursos.component.css']
})
export class CierreActasCursosComponent implements OnInit {
  idacta:idacta;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private CierreS:CierreActasService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.idacta ={
      idacta : this.data
    }
  }

  cerrarActa(){
    this.CierreS.cerrarActa(this.idacta).subscribe(Response => {
      this.dialog.closeAll();
    });

  };

}
