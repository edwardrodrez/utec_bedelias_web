import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerAppComponent } from 'src/app/container-app/container-app.component';
import { ListarAreasComponent } from 'src/app/tablas-gestion/ABMAreaEstudio/listar-areas/listar-areas.component';
import { ListarCarrerasComponent } from 'src/app/tablas-gestion/ABMCarreras/listar-carreras/listar-carreras.component';
import { ListarCursosComponent } from 'src/app/tablas-gestion/ABMCursos/listar-cursos/listar-cursos.component';
import { ListarDocentesComponent } from 'src/app/tablas-gestion/ABMDocentes/listar-docentes/listar-docentes.component';
import { ListarPeriodoExamenesComponent } from 'src/app/tablas-gestion/ABMPeriodoExamenes/listar-periodo-examenes/listar-periodo-examenes.component';
import { ListarPeriodoInscripcionComponent } from 'src/app/tablas-gestion/ABMPeriodoInscripciones/listar-periodo-inscripcion/listar-periodo-inscripcion.component';
import { ListarPeriodoLectivosComponent } from 'src/app/tablas-gestion/ABMPeriodoLectivos/listar-periodo-lectivos/listar-periodo-lectivos.component';
import { ListarSedesComponent } from 'src/app/tablas-gestion/ABMSedes/listar-sedes/listar-sedes.component';
import { ListarTipoCursosComponent } from 'src/app/tablas-gestion/ABMTipoCursos/listar-tipo-cursos/listar-tipo-cursos.component';

const routes: Routes = [
  {  
    path: '',
    component: ContainerAppComponent,
    children:[
      {
          path:'Sedes',
          component: ListarSedesComponent
      },

  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolbarRoutingModule { }
