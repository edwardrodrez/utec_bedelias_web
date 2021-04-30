import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SecretarioExistenteComponent } from '../secretario-existente/secretario-existente.component';
import { SecretarioNuevoComponent } from '../secretario-nuevo/secretario-nuevo.component';
@Component({
  selector: 'app-add-secretario',
  templateUrl: './add-secretario.component.html',
  styleUrls: ['./add-secretario.component.css']
})
export class AddSecretarioComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    
  }
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  valorSelect;

    //ABM CRUD
    usExistente(){
      this.dialog.open(SecretarioExistenteComponent);
    }
    usNuevo(){
      this.dialog.open(SecretarioNuevoComponent);
    }

}
