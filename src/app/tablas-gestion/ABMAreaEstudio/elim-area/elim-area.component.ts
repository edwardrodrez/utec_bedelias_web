import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AreaDeEstudioService } from 'src/app/services/area-de-estudio.service';

@Component({
  selector: 'app-elim-area',
  templateUrl: './elim-area.component.html',
  styleUrls: ['./elim-area.component.css']
})
export class ElimAreaComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private _AreaDeEstudioService:AreaDeEstudioService,public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  delete(){
    this._AreaDeEstudioService.deleteAreaDeEstudio(this.data).subscribe(Response=>{

    })
    this.dialog.closeAll();

  }
}
