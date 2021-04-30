import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-admin-existente',
  templateUrl: './admin-existente.component.html',
  styleUrls: ['./admin-existente.component.css']
})
export class AdminExistenteComponent implements OnInit {

  constructor(private _UsuarioService:UsuarioService,public dialog :MatDialog) { }
  ci:string="";
  ngOnInit(): void {
  }

  CiControl = new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(8)]);


  getAdmin(){
    if(this.CiControl.valid){
      this._UsuarioService.getUsuarioCi({ci:this.ci}).subscribe(Response=>{
        this.addAdmin(Response.idusuario)
      })
      this.dialog.closeAll()
    }

  }
 async addAdmin(id){

  await  this._UsuarioService.addAdmin(id).subscribe(Response=>{
      this.dialog.closeAll();
    })
  }
}
