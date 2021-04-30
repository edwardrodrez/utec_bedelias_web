import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-secretario-existente',
  templateUrl: './secretario-existente.component.html',
  styleUrls: ['./secretario-existente.component.css']
})
export class SecretarioExistenteComponent implements OnInit {

  constructor(private _UsuarioService:UsuarioService,public dialog :MatDialog) { }
  ci:string="";
  ngOnInit(): void {
  }
  CiControl = new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(8)]);

  agregarSecretario(){
    if(this.CiControl.valid){
      this._UsuarioService.getUsuarioCi({ci:this.ci}).subscribe(Response=>{
        if(Response != null){
         this.addSecretario(Response.idusuario)
        } 
   
       })
    }

   }

 async addSecretario(id){
  await  this._UsuarioService.addSecretario(id).subscribe(Response=>{
      this.dialog.closeAll();
    })
  }
}