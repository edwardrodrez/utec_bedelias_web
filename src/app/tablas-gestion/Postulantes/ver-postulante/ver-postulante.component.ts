import { Component, OnInit } from '@angular/core';
import { AceptarPostulanteComponent } from '../aceptar-postulante/aceptar-postulante.component';
import { RechazarPostulanteComponent } from '../rechazar-postulante/rechazar-postulante.component';
import {MatDialog} from '@angular/material/dialog';
import { Inscripcion } from 'src/app/interfaces/inscripcion';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-ver-postulante',
  templateUrl: './ver-postulante.component.html',
  styleUrls: ['./ver-postulante.component.css']
})
export class VerPostulanteComponent implements OnInit {
fileUrl;
  constructor(public dialog: MatDialog,private sanitizer: DomSanitizer) {}
  insc:Inscripcion;
  ngOnInit(): void {
    console.log(history.state);
    this.insc=history.state;
  }

  //ABM CRUDD
  aceptarPostulante(){
    this.dialog.open(AceptarPostulanteComponent,{data:this.insc});
  }
  rechazarPostulante(){
    this.dialog.open(RechazarPostulanteComponent,{data:this.insc});
  }


  public showCi(){
    var st = this.insc.ci.split(",").pop()
   
      const byteArray = new Uint8Array(atob(st).split('').map(char => char.charCodeAt(0)));
     var b = new Blob([byteArray], {type: 'application/pdf'});
     console.log(b);
      const url = window.URL.createObjectURL(b);
      window.open(url);
}

public showEscolaridad(){
  var st = this.insc.escolaridad.split(",").pop()
 
    const byteArray = new Uint8Array(atob(st).split('').map(char => char.charCodeAt(0)));
   var b = new Blob([byteArray], {type: 'application/pdf'});
   console.log(b);
    const url = window.URL.createObjectURL(b);
    window.open(url);
}

public showSalud(){
  var st = this.insc.carnetSalud.split(",").pop()
 
    const byteArray = new Uint8Array(atob(st).split('').map(char => char.charCodeAt(0)));
   var b = new Blob([byteArray], {type: 'application/pdf'});
   console.log(b);
    const url = window.URL.createObjectURL(b);
    window.open(url);
}
}
