import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AreaDeEstudioService } from 'src/app/services/area-de-estudio.service';

@Component({
  selector: 'app-add-area',
  templateUrl: './add-area.component.html',
  styleUrls: ['./add-area.component.css']
})
export class AddAreaComponent implements OnInit {

  constructor(private _AreaDeEstudiService:AreaDeEstudioService,public dialog:MatDialog) { }
  nombre:String="";
  ngOnInit(): void {
  }
  nombreFormControl = new FormControl('', [
    Validators.required,
  ]);
  postAreaDeEstudio(){
    console.log(this.nombre);
    if(this.nombreFormControl.valid){
      this._AreaDeEstudiService.postAreaDeEstudio({nombre:this.nombre}).subscribe(Response=>{

      })
      this.dialog.closeAll();
    }

  }
}
