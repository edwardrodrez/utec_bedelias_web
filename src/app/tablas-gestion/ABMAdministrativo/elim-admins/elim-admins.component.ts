import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-elim-admins',
  templateUrl: './elim-admins.component.html',
  styleUrls: ['./elim-admins.component.css']
})
export class ElimAdminsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Usuario,private _UsuarioService:UsuarioService,private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  quitAdmin(){
    this._UsuarioService.quitAdministrativo(this.data.idusuario).subscribe(Response=>{
      this.dialog.closeAll();
    })
  }
}
