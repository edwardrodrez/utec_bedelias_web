import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AreaDeEstudioService } from 'src/app/services/area-de-estudio.service';

@Component({
  selector: 'app-add-creditosminimos',
  templateUrl: './add-creditosminimos.component.html',
  styleUrls: ['./add-creditosminimos.component.css']
})
export class AddCreditosminimosComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private _AreaDeEstudioService:AreaDeEstudioService,public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  confirmar(){
    this._AreaDeEstudioService.addCredito(this.data).subscribe(Response =>{
      this.dialog.closeAll()
    })
  }
}
