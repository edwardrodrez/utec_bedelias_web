import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CarreraService } from 'src/app/services/carrera.service';

@Component({
  selector: 'app-elim-carrera',
  templateUrl: './elim-carrera.component.html',
  styleUrls: ['./elim-carrera.component.css']
})
export class ElimCarreraComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _carreraService:CarreraService,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteCarrera(){
    this._carreraService.deleteCarrera(this.data).subscribe(Response=>{
      
    });
    this.dialog.closeAll();
  }

}
