import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-docente-existente',
  templateUrl: './docente-existente.component.html',
  styleUrls: ['./docente-existente.component.css']
})
export class DocenteExistenteComponent implements OnInit {

  constructor(private _UsuarioService:UsuarioService,public dialog :MatDialog) { }
  ci:string="";
  ngOnInit(): void {
  }
  CiControl = new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(8)]);

  getDocente(){
    if(this.CiControl.valid){
      this._UsuarioService.getUsuarioCi({ci:this.ci}).subscribe(Response=>{
        if(Response != null){} 
         this.addDocente(Response.idusuario)
       })
    }

  }

 async addDocente(id){
  await  this._UsuarioService.addDocente(id).subscribe(Response=>{
      this.dialog.closeAll();
    })
  }
}
