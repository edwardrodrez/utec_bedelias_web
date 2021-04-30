import { Component, OnInit } from '@angular/core';
import { Carrera } from 'src/app/interfaces/carrera';
import { Curso } from 'src/app/interfaces/curso';
import { CarreraService } from 'src/app/services/carrera.service';
import { CursoService } from 'src/app/services/curso.service';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
@Component({
  selector: 'app-add-carrera',
  templateUrl: './add-carrera.component.html',
  styleUrls: ['./add-carrera.component.css']
})
export class AddCarreraComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition= 'top';
  horizontalPositionError: MatSnackBarHorizontalPosition = 'center';
  verticalPositionError: MatSnackBarVerticalPosition = 'bottom';
  constructor(private _cursoService:CursoService,private _carreraService:CarreraService,private _snackBar: MatSnackBar,public dialog: MatDialog) { }
  typesOfShoes: Curso[]; 
  valorSelect: Number[];
  carr:Carrera;
  ngOnInit(): void {
    this.carr = {
      nombre:"",
      creditoMinimo:0
    }
    this.getCursos();
  }
  nombreFormControl = new FormControl('', [
    Validators.required,
  ]);
  creFormControl = new FormControl('', [
    Validators.required,
    Validators.min(0),
  ]);
  postCarrera(){
    if(this.nombreFormControl.valid&&this.creFormControl.valid){
      this._carreraService.postCarrera(this.carr).subscribe(Response =>{
        this.agregarCurso(Response.idcarrera);
      });
    }

  };

  async agregarCurso(id){
    if(this.valorSelect != null && this.valorSelect[0] != null){
      for(const valor of this.valorSelect){
        await this._carreraService.addCurso({ "idcurso": valor,"idcarrera": id}).subscribe(Response=>{
        });
      };
    }
    this.openNotificacionUsuario("La carrera ah sido agregada");
    this.dialog.closeAll();
  }

  getCursos(){
    this._cursoService.getCursos().subscribe(Response=>{
      this.typesOfShoes = Response;
    })
  }
  openNotificacionUsuario(mensaje:string) {
    this._snackBar.open(mensaje, 'OK', {
      duration: 3000,
      panelClass: ['notificar-usuario'],
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
