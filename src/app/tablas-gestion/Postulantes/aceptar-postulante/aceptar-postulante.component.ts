import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inscripcion } from 'src/app/interfaces/inscripcion';
import { InscripcionService } from 'src/app/services/inscripcion.service';

@Component({
  selector: 'app-aceptar-postulante',
  templateUrl: './aceptar-postulante.component.html',
  styleUrls: ['./aceptar-postulante.component.css']
})
export class AceptarPostulanteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Inscripcion,private _InscrpcionService:InscripcionService,private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  confirmar(){
    this._InscrpcionService.Aceptarinscripcion({idInscripcion:this.data.idInscripcion}).subscribe(Response=>{
      this.dialog.closeAll();
    })
  }
}
