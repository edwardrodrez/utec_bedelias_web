import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PeriodosService } from 'src/app/services/periodos.service';

@Component({
  selector: 'app-elim-p-examen',
  templateUrl: './elim-p-examen.component.html',
  styleUrls: ['./elim-p-examen.component.css']
})
export class ElimPExamenComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dialog:MatDialog,private _periodoService:PeriodosService) { }

  ngOnInit(): void {
  }

  delete(){
    this._periodoService.DeletePeriodo(this.data).subscribe(Response=>{
      this.dialog.closeAll();
    })
  }
}
