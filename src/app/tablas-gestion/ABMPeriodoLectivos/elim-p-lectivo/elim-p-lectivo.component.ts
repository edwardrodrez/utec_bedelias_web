import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PeriodosService } from 'src/app/services/periodos.service';

@Component({
  selector: 'app-elim-p-lectivo',
  templateUrl: './elim-p-lectivo.component.html',
  styleUrls: ['./elim-p-lectivo.component.css']
})
export class ElimPLectivoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dialog:MatDialog,private _periodoService:PeriodosService) { }

  ngOnInit(): void {
  }

  delete(){
    this._periodoService.DeletePeriodo(this.data).subscribe(Response=>{
      this.dialog.closeAll();
    })
  }
}
