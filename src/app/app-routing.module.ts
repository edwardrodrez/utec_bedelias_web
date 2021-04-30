import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { BienvenidaComponent } from './bienvenida/bienvenida/bienvenida.component';
import { ContainerAppComponent } from './container-app/container-app.component';
import { DocenteGuard } from './docente.guard';
import { EstudianteGuard } from './estudiante.guard';
import { AdminComponent } from './modoAdmin/admin/admin.component';
import { CalificarCursoComponent } from './pages/calificar-curso/calificar-curso.component';
import { CalificarExamenComponent } from './pages/calificar-examen/calificar-examen.component';
import { CierreCursosComponent } from './pages/cierre-cursos/cierre-cursos.component';
import { CierreExamenesComponent } from './pages/cierre-examenes/cierre-examenes.component';
import { CierreInscripcionesComponent } from './pages/cierre-inscripciones/cierre-inscripciones.component';
import { ControlAsistenciasComponent } from './pages/control-asistencias/control-asistencias.component';
import { ControlCertificadosComponent } from './pages/control-certificados/control-certificados.component';
import { InscribirseCursoComponent } from './pages/inscribirse-curso/inscribirse-curso.component';
import { InscribirseExamenComponent } from './pages/inscribirse-examen/inscribirse-examen.component';
import { SolicitarEscolaridadComponent } from './pages/solicitar-escolaridad/solicitar-escolaridad.component';
import { ValidarEscolaridadComponent } from './pages/validar-escolaridad/validar-escolaridad.component';
import { PreviasComponent } from './previas/previas.component';
import { SecreGuard } from './secre.guard';
import { CierreActasCursosComponent } from './tablas-gestion/ABMActaCursos/cierre-actas-cursos/cierre-actas-cursos.component';
import { ListarActasCursosComponent } from './tablas-gestion/ABMActaCursos/listar-actas-cursos/listar-actas-cursos.component';
import { CierreActasExamenesComponent } from './tablas-gestion/ABMActaExamenes/cierre-actas-examenes/cierre-actas-examenes.component';
import { ListarActasExamenesComponent } from './tablas-gestion/ABMActaExamenes/listar-actas-examenes/listar-actas-examenes.component';
import { ListarAdminsComponent } from './tablas-gestion/ABMAdministrativo/listar-admins/listar-admins.component';
import { ListarAreasComponent } from './tablas-gestion/ABMAreaEstudio/listar-areas/listar-areas.component';
import { ListarCarrerasComponent } from './tablas-gestion/ABMCarreras/listar-carreras/listar-carreras.component';
import { ListarCursosComponent } from './tablas-gestion/ABMCursos/listar-cursos/listar-cursos.component';
import { ListarDocentesComponent } from './tablas-gestion/ABMDocentes/listar-docentes/listar-docentes.component';
import { ListarPeriodoExamenesComponent } from './tablas-gestion/ABMPeriodoExamenes/listar-periodo-examenes/listar-periodo-examenes.component';
import { ListarPeriodoInscripcionComponent } from './tablas-gestion/ABMPeriodoInscripciones/listar-periodo-inscripcion/listar-periodo-inscripcion.component';
import { ListarPeriodoLectivosComponent } from './tablas-gestion/ABMPeriodoLectivos/listar-periodo-lectivos/listar-periodo-lectivos.component';
import { ListarSecretariosComponent } from './tablas-gestion/ABMSecretario/listar-secretarios/listar-secretarios.component';
import { ListarSedesComponent } from './tablas-gestion/ABMSedes/listar-sedes/listar-sedes.component';
import { ListarTipoCursosComponent } from './tablas-gestion/ABMTipoCursos/listar-tipo-cursos/listar-tipo-cursos.component';
import { VerPostulanteComponent } from './tablas-gestion/Postulantes/ver-postulante/ver-postulante.component';



const routes: Routes = [

  {
    path: '',
    component: BienvenidaComponent,

  },
  {
    path: 'ValidarEscolaridad',
    component: ValidarEscolaridadComponent,

  },
  {
    path: 'CierrePeriodoInscripcionExamenes',
    component: CierreExamenesComponent,

  },
  {
    path: 'CierrePeriodoInscripcionCursos',
    component: CierreCursosComponent,
    canActivate:[SecreGuard]
  },
  {
    path: 'CierrePeriodoInscripcionCarreras',
    component: CierreInscripcionesComponent,
    canActivate:[SecreGuard]
  },
  {
    path: 'CierreDeCursos',
    component: ListarActasCursosComponent,
    canActivate:[AdminGuard]
  },
  {
    path: 'CierreDeExamenes',
    component: ListarActasExamenesComponent,
    canActivate:[AdminGuard]
  },
  {
    path: 'SolicitudEscolaridad',
    component: SolicitarEscolaridadComponent,
    canActivate:[EstudianteGuard]
  },
  {
    path: 'Certificados',
    component: ControlCertificadosComponent,

  },
  {
    path: 'InscripcionCursos',
    component: InscribirseCursoComponent,
    canActivate:[EstudianteGuard]
  },
  {
    path: 'InscripcionExamenes',
    component: InscribirseExamenComponent,
    canActivate:[EstudianteGuard]
  },
  {
    path: 'CalificarCursos',
    component: CalificarCursoComponent,
    canActivate:[DocenteGuard]
  },
  {
    path: 'CalificarExamenes',
    component: CalificarExamenComponent,
    canActivate:[DocenteGuard]
  },
  {
    path: 'ControlAsistencias',
    component: ControlAsistenciasComponent,
    canActivate:[DocenteGuard]
  },
  {
    path: 'Previas',
    component: PreviasComponent,
    canActivate:[EstudianteGuard]
  },
  {
    path: 'SolicitudPostulante',
    component: VerPostulanteComponent,

  },
  {
    path: 'bedelias',
    component: ContainerAppComponent,
  },
  {
    path: "Sedes",
    component: ListarSedesComponent,
    canActivate:[AdminGuard]
  },
  {
    path: "PeriodosdeInscripcion",
    component: ListarPeriodoInscripcionComponent,
    canActivate:[AdminGuard]
  },
  {
    path: "Docentes",
    component: ListarDocentesComponent,
    canActivate:[AdminGuard]
  },
  {
    path: "Secretarios",
    component: ListarSecretariosComponent,
    canActivate:[AdminGuard]
  },
  {
    path: "Administrativos",
    component: ListarAdminsComponent,
    canActivate:[AdminGuard]
  },
  {
    path: "Carreras",
    component: ListarCarrerasComponent,
    canActivate:[AdminGuard]
  },
  {
    path: "PeriodosLectivos",
    component: ListarPeriodoLectivosComponent,
    canActivate:[AdminGuard]
  },
  {
    path: "PeriodosdeExamenes",
    component: ListarPeriodoExamenesComponent,
    canActivate:[AdminGuard]
  },
  {
    path: "Cursos",
    component: ListarCursosComponent,
    canActivate:[AdminGuard]
  },
  {
    path: "AreasdeEstudio",
    component: ListarAreasComponent,
    canActivate:[AdminGuard]
  },
  {
    path: "TiposdeCursos",
    component: ListarTipoCursosComponent,
    canActivate:[AdminGuard]
  },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
