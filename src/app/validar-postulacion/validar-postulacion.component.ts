import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventEmitter } from 'events';
import { AppComponent } from '../app.component';
import { ContainerAppComponent } from '../container-app/container-app.component';


@Component({
  selector: 'app-validar-postulacion',
  templateUrl: './validar-postulacion.component.html',
  styleUrls: ['./validar-postulacion.component.css']
})
export class ValidarPostulacionComponent implements OnInit {


  constructor(public dialog: MatDialog) { }
  private cont:ContainerAppComponent;
  ngOnInit(): void {
  }
  irInicio() {
    this.dialog.closeAll();
  }
}
