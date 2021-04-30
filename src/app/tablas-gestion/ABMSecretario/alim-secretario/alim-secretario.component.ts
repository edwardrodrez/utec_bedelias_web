import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-alim-secretario',
  templateUrl: './alim-secretario.component.html',
  styleUrls: ['./alim-secretario.component.css']
})
export class AlimSecretarioComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Usuario,private _UsuarioService:UsuarioService,private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  quitSecretario(){
    this._UsuarioService.quitSecretario(this.data.idusuario).subscribe(Response=>{
      this.dialog.closeAll();
    })
  }
}
