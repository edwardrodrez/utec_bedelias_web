import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { AdminExistenteComponent } from '../admin-existente/admin-existente.component';
import { AdminNuevoComponent } from '../admin-nuevo/admin-nuevo.component';
@Component({
  selector: 'app-add-admins',
  templateUrl: './add-admins.component.html',
  styleUrls: ['./add-admins.component.css']
})
export class AddAdminsComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  valorSelect;

    //ABM CRUD
    usExistente(){
      this.dialog.closeAll();
      this.dialog.open(AdminExistenteComponent).afterClosed().subscribe(Response=>{

      });
    }
    usNuevo(){
      this.dialog.closeAll();
      this.dialog.open(AdminNuevoComponent).afterClosed().subscribe(Response=>{

      });
    }
}
