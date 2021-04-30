import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Curso } from 'src/app/interfaces/curso';
import { CarreraService } from 'src/app/services/carrera.service';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-add-curso-carrera',
  templateUrl: './add-curso-carrera.component.html',
  styleUrls: ['./add-curso-carrera.component.css']
})
export class AddCursoCarreraComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private _cursoService:CursoService,
  public dialog: MatDialog,private dialogRef: MatDialogRef<AddCursoCarreraComponent>,private _carreraService:CarreraService) { }

  cursos:Curso[];
  listadas:Curso[]=[];
  valorSelect:Curso[]=[];
  anotherArray:Curso[]=[];
  ngOnInit(): void {
     this.cursos = this.data.cursos;
    this.getcursos();
  }

  getcursos(){
    this._cursoService.getCursos().subscribe(Response => {
      Response.forEach(element => {
          if(!this.cursos.some(e => e.idcurso === element.idcurso))
            this.listadas.push(element);
            this.anotherArray = this.listadas;
      });
    });
  };

  agregarCursos(){
    this.valorSelect.forEach(element=>{
      this._carreraService.addCurso({idcarrera:this.data.idcarrera,idcurso:element.idcurso}).subscribe(Response=>{
          console.log(Response)
      })
    })
    this.dialogRef.close(this.valorSelect);
  }
  

  onKey(value) {
    this.anotherArray = this.search(value);
  }
  
  search(value: string) {
    let filter = this.listadas.filter(item =>
      item.nombre.toLowerCase().includes(value.toLowerCase())
    );
    return [...filter];
  }
}
