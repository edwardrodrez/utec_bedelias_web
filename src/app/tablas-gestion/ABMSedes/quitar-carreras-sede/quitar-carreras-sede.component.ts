import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SedeService } from 'src/app/services/sede.service';

@Component({
  selector: 'app-quitar-carreras-sede',
  templateUrl: './quitar-carreras-sede.component.html',
  styleUrls: ['./quitar-carreras-sede.component.css']
})
export class QuitarCarrerasSedeComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private _sedeService:SedeService,public dialog: MatDialog) { }

  ngOnInit(): void {
  }
quit(){
  this._sedeService.quitCarrera(this.data).subscribe(Response=>{
  });
  this.dialog.closeAll();
}
 
}
