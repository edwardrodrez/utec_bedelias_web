import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AreaDeEstudioService } from 'src/app/services/area-de-estudio.service';

@Component({
  selector: 'app-mod-area',
  templateUrl: './mod-area.component.html',
  styleUrls: ['./mod-area.component.css']
})
export class ModAreaComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialog:MatDialog,private _AreaDeEstudioService:AreaDeEstudioService) { }

  ngOnInit(): void {
  }
  nombreFormControl = new FormControl('', [
    Validators.required,
  ]);
  putAreaDeEstudio(){
    if(this.nombreFormControl.valid){
      this._AreaDeEstudioService.putAreaDeEstudio(this.data).subscribe(Response=>{

      })
      this.dialog.closeAll();
    }

  }
}
