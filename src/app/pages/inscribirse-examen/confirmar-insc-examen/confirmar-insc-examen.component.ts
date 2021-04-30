import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InscripcionAlumnoService } from 'src/app/services/inscripcion-alumno.service';

export interface val {
  idperiodo: number;
  idusuario: number;
}
@Component({
  selector: 'app-confirmar-insc-examen',
  templateUrl: './confirmar-insc-examen.component.html',
  styleUrls: ['./confirmar-insc-examen.component.css']
})
export class ConfirmarInscExamenComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: val,private InscripcionS:InscripcionAlumnoService,private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  insc(){
    this.InscripcionS.addEstudiante(this.data).subscribe(Response=>{
      this.dialog.closeAll();
    })
  }

}
