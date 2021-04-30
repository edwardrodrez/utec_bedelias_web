import { Component , OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FormLoginComponent } from './login/form-login/form-login.component';
import { Router } from '@angular/router'
import { Location } from '@angular/common';
import {PlatformLocation } from '@angular/common';
import { FormLogoutComponent } from './logout/form-logout/form-logout.component';
import { IngresarCertificadoComponent } from './pages/ingresar-certificado/ingresar-certificado.component';
import { CambiarPassComponent } from './pages/cambiar-pass/cambiar-pass.component';

export interface Persona {
  ci:string,
  nombre:string,
  apellido:string,
  correo:string,
  telefono:string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  title = 'BEDELIAS 2020';
  public opened = false;
  public mode: string;
  public color;

  public active = false;
  public href: string = "";
  public loading: boolean = true;
  public Persona: Persona;

  constructor(public dialog: MatDialog,private router: Router,location: Location ,platformLocation: PlatformLocation) {


    console.log((platformLocation as any).location.href);
    router.events.subscribe((val) => {
      if((platformLocation as any).location.href != 'http://localhost:4200/'){
        this.active = true;
      } else {
        this.active = false;
      }
    });
  }

  ngOnInit() : void{
    if (localStorage.getItem("menu") == null){
      console.log(localStorage.getItem("menu"));
      localStorage.setItem ('menu', "Estudiante");
    }
    this.mode = localStorage.getItem("menu");
    this.Persona ={
      ci:"",
      nombre:"",
      apellido:"",
      correo:"",
      telefono:"",
    }
  }
  openDialogLogin(){
    this.dialog.open(FormLoginComponent);
  }
  openDialogLogout(){
    this.dialog.open(FormLogoutComponent);
  }
  openCambiarPass(){
    this.dialog.open(CambiarPassComponent);
  }
  onValChange(value){
    if(value == "Admin"){
       localStorage.setItem ('menu', "Admin");
        this.mode ="Admin";
        this.color = "Black";
    }else if(value == "Estudiante"){
      localStorage.setItem ('menu', "Estudiante");
        this.mode ="Estudiante";
        this.color = "primary";
    }else if(value == "Docente"){
      localStorage.setItem ('menu', "Docente");
      this.mode ="Docente";
      this.color = "red";
    }else if(value == "Secretario"){
      localStorage.setItem ('menu', "Secretario");
      this.mode ="Secretario";
      this.color = "primary";
    }
  }

  addCertificado(){
    this.dialog.open(IngresarCertificadoComponent);
  }


  getUs(){
    if(localStorage.getItem('persona') != null){
         var p = JSON.parse(localStorage.getItem('persona')) ;
    this.Persona ={
      ci:p.ci,
      nombre:p.nombre,
      apellido:p.apellido,
      correo:p.correo,
      telefono:p.telefono,
    }

    }
      return localStorage.getItem('persona');
    }

  isAdmin(){
    if(localStorage.getItem('roles') == null ){
      return false
    }
    if(localStorage.getItem('roles').includes( 'Administrativo' ) ){
      return true
    }
    return false;
  }

  isEstudiante(){
    if(localStorage.getItem('roles') == null ){
      return false
    }
    if(localStorage.getItem('roles').includes( 'Estudiante' ) ){
      return true
    }
    return false;
  }

  isDocente(){
    if(localStorage.getItem('roles') == null ){
      return false
    }
    if(localStorage.getItem('roles').includes( 'Docente' ) ){
      return true
    }
    return false;
  }


  isSecre(){
    if(localStorage.getItem('roles') == null ){
      return false
    }
    if(localStorage.getItem('roles').includes( 'Secretario' ) ){
      return true
    }
    return false;
  }

  isSesion(){

    if(localStorage.getItem('token') == null ){
      return false
    }
    return true;
  }

}
