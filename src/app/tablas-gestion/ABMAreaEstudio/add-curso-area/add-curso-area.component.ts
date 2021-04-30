import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/interfaces/curso';
import { AreaDeEstudioService } from 'src/app/services/area-de-estudio.service';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-add-curso-area',
  templateUrl: './add-curso-area.component.html',
  styleUrls: ['./add-curso-area.component.css']
})
export class AddCursoAreaComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private _AreaDeEstudioService:AreaDeEstudioService, private _CursoService:CursoService,public dialog:MatDialog) { }

  cursos:Curso[];
  elegidos:Curso[];



  ngOnInit(): void {
    this._CursoService.getCursosinArea().subscribe(Response=>{
      this.cursos = Response;    
      
    });
  }


async addCurso(){
  if(this.elegidos != null && this.elegidos[0] != null){
    for(const elem of this.elegidos){
      await this._AreaDeEstudioService.addCurso({idcurso:elem.idcurso,idareaDeEstudio:this.data.idareadeestudio}).toPromise();
    }
  }
  this.dialog.closeAll();
}

  
}
