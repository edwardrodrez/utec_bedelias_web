import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CalificarService } from 'src/app/services/calificar.service';

export interface ret {
  idacta: number;
  calificacion: number;
}
@Component({
  selector: 'app-mod-calificacion-ex',
  templateUrl: './mod-calificacion-ex.component.html',
  styleUrls: ['./mod-calificacion-ex.component.css']
})
export class ModCalificacionExComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ret,private CalificarService2:CalificarService,private dialog:MatDialog) { }

  ret:ret;

  ngOnInit(): void {
    this.ret = {
      idacta : this.data.idacta,
      calificacion : this.data.calificacion
    };
  }
  notaFormControl = new FormControl('', [
    Validators.required,
    Validators.min(0),
    Validators.max(5)
  ]);
  calificar(){
    if(this.notaFormControl.valid){
    this.CalificarService2.calificarActa(this.ret).subscribe(Response=>{
      this.dialog.closeAll();
    })
  }
  }

}
