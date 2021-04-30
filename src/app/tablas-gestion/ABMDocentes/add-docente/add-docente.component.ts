import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DocenteExistenteComponent } from '../docente-existente/docente-existente.component';
import { DocenteNuevoComponent } from '../docente-nuevo/docente-nuevo.component';
@Component({
  selector: 'app-add-docente',
  templateUrl: './add-docente.component.html',
  styleUrls: ['./add-docente.component.css']
})
export class AddDocenteComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  valorSelect;

    //ABM CRUD
    usExistente(){
      this.dialog.open(DocenteExistenteComponent).afterClosed().subscribe(Response=>{
        this.dialog.closeAll();
      });
    }
    usNuevo(){
      this.dialog.open(DocenteNuevoComponent).afterClosed().subscribe(Response=>{
        this.dialog.closeAll();
      });
    }

}
