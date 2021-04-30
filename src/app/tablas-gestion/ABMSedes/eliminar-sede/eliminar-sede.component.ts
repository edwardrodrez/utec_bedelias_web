import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SedeService } from 'src/app/services/sede.service';

@Component({
  selector: 'app-eliminar-sede',
  templateUrl: './eliminar-sede.component.html',
  styleUrls: ['./eliminar-sede.component.css']
})
export class EliminarSedeComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _sedeService:SedeService,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

deleteSede(){
  this._sedeService.deleteSede(this.data.idsede).subscribe(Response => {
  });
  this.dialog.closeAll();
}

}
