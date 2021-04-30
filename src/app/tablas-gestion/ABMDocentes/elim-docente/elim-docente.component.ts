import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-elim-docente',
  templateUrl: './elim-docente.component.html',
  styleUrls: ['./elim-docente.component.css']
})
export class ElimDocenteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Usuario,private _UsuarioService:UsuarioService,private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  quitDocente(){
    this._UsuarioService.quitDocente(this.data.idusuario).subscribe(Response=>{
      this.dialog.closeAll();
    })
  }

}
