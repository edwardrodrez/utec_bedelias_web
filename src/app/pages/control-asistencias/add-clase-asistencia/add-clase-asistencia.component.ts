
import {FormControl} from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CalificarService } from 'src/app/services/calificar.service';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-add-clase-asistencia',
  templateUrl: './add-clase-asistencia.component.html',
  styleUrls: ['./add-clase-asistencia.component.css']
})
export class AddClaseAsistenciaComponent implements OnInit {
  date;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private calificarS:CalificarService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.date = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
  }


  add(){
    console.log(this.data)
    this.calificarS.addClase(this.data).subscribe(Response=>{
      this.dialog.closeAll();
    })
  }
}
