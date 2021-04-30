import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CarreraService } from 'src/app/services/carrera.service';

@Component({
  selector: 'app-mod-carrera',
  templateUrl: './mod-carrera.component.html',
  styleUrls: ['./mod-carrera.component.css']
})
export class ModCarreraComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _carreraService:CarreraService,public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  nombreFormControl = new FormControl('', [
    Validators.required,
  ]);
  creFormControl = new FormControl('', [
    Validators.required,
    Validators.min(0)
  ]);
  putCarrera(){
    if(this.nombreFormControl.valid&&this.creFormControl.valid){
    this._carreraService.putCarrera(this.data).subscribe(Response =>{
      this.dialog.closeAll();
    });
  }
  }
}
