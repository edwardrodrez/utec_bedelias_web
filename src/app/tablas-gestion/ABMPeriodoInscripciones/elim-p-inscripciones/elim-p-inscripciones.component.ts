import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { periododeincripciones } from 'src/app/interfaces/periododeincripciones';
import { InscripcionService } from 'src/app/services/inscripcion.service';

@Component({
  selector: 'app-elim-p-inscripciones',
  templateUrl: './elim-p-inscripciones.component.html',
  styleUrls: ['./elim-p-inscripciones.component.css']
})
export class ElimPInscripcionesComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: periododeincripciones,private _InscripcionService:InscripcionService,
              private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  delete(){
    this._InscripcionService.deletePeriodoDeInscripcion(this.data.idperiododeincripciones).subscribe(Response=>{
      this.dialog.closeAll();
    })
  }

}

