import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CalificarService } from 'src/app/services/calificar.service';
import { CalificarExamenComponent } from '../calificar-examen.component';

export interface ret {
  idacta: number;
  calificacion: number;
}

@Component({
  selector: 'app-add-calificacion-ex',
  templateUrl: './add-calificacion-ex.component.html',
  styleUrls: ['./add-calificacion-ex.component.css']
})
export class AddCalificacionExComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: number,private CalificarService2:CalificarService,private dialog:MatDialog,private dialogRef: MatDialogRef<CalificarExamenComponent>) { }

  ret:ret;

  ngOnInit(): void {
    this.ret = {
      idacta : this.data,
      calificacion : 0
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
      this.dialogRef.close();
    })
  }
  }


}
