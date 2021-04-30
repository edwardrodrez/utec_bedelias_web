import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inscripcion } from 'src/app/interfaces/inscripcion';
import { InscripcionService } from 'src/app/services/inscripcion.service';

@Component({
  selector: 'app-rechazar-postulante',
  templateUrl: './rechazar-postulante.component.html',
  styleUrls: ['./rechazar-postulante.component.css']
})
export class RechazarPostulanteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Inscripcion,private dialo:MatDialog,private _inscService:InscripcionService) { }
  comentario="";
  ngOnInit(): void {

  }

  confirmar(){
    var env={
      idInscripcion:this.data.idInscripcion,
      motivos:this.comentario
    }
    console.log(env);
    this._inscService.DenegarInscripcion(env).subscribe(Response=>{
      this.dialo.closeAll();
    })
  }
  
}

