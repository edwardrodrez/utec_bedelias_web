import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './menu/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ListarSedesComponent } from './tablas-gestion/ABMSedes/listar-sedes/listar-sedes.component';
import { ListarCarrerasComponent } from './tablas-gestion/ABMCarreras/listar-carreras/listar-carreras.component';
import { ListarDocentesComponent } from './tablas-gestion/ABMDocentes/listar-docentes/listar-docentes.component';
import { ListarAreasComponent } from './tablas-gestion/ABMAreaEstudio/listar-areas/listar-areas.component';
import { ListarCursosComponent } from './tablas-gestion/ABMCursos/listar-cursos/listar-cursos.component';
import { ListarPeriodoExamenesComponent } from './tablas-gestion/ABMPeriodoExamenes/listar-periodo-examenes/listar-periodo-examenes.component';
import { ListarPeriodoInscripcionComponent } from './tablas-gestion/ABMPeriodoInscripciones/listar-periodo-inscripcion/listar-periodo-inscripcion.component';
import { ListarPeriodoLectivosComponent } from './tablas-gestion/ABMPeriodoLectivos/listar-periodo-lectivos/listar-periodo-lectivos.component';
import { ListarTipoCursosComponent } from './tablas-gestion/ABMTipoCursos/listar-tipo-cursos/listar-tipo-cursos.component';
import { ContainerAppComponent } from './container-app/container-app.component';
import { AdminComponent } from './modoAdmin/admin/admin.component';
import { BienvenidaComponent } from './bienvenida/bienvenida/bienvenida.component';
import { FormLoginComponent } from './login/form-login/form-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { AddSedeComponent } from './tablas-gestion/ABMSedes/add-sede/add-sede.component';
import { EliminarSedeComponent } from './tablas-gestion/ABMSedes/eliminar-sede/eliminar-sede.component';
import { ModificarSedeComponent } from './tablas-gestion/ABMSedes/modificar-sede/modificar-sede.component';
import { IncluirCarreraComponent } from './tablas-gestion/ABMSedes/incluir-carrera/incluir-carrera.component';
import { HttpClient, HttpClientModule, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddAreaComponent } from './tablas-gestion/ABMAreaEstudio/add-area/add-area.component';
import { ElimAreaComponent } from './tablas-gestion/ABMAreaEstudio/elim-area/elim-area.component';
import { ModAreaComponent } from './tablas-gestion/ABMAreaEstudio/mod-area/mod-area.component';
import { AddCarreraComponent } from './tablas-gestion/ABMCarreras/add-carrera/add-carrera.component';
import { ElimCarreraComponent } from './tablas-gestion/ABMCarreras/elim-carrera/elim-carrera.component';
import { ModCarreraComponent } from './tablas-gestion/ABMCarreras/mod-carrera/mod-carrera.component';
import { AddCursoComponent } from './tablas-gestion/ABMCursos/listar-cursos/add-curso/add-curso.component';
import { ElimCursoComponent } from './tablas-gestion/ABMCursos/listar-cursos/elim-curso/elim-curso.component';
import { ModCursoComponent } from './tablas-gestion/ABMCursos/listar-cursos/mod-curso/mod-curso.component';
import { AddPExamenComponent } from './tablas-gestion/ABMPeriodoExamenes/add-p-examen/add-p-examen.component';
import { ElimPExamenComponent } from './tablas-gestion/ABMPeriodoExamenes/elim-p-examen/elim-p-examen.component';
import { ModPExamenComponent } from './tablas-gestion/ABMPeriodoExamenes/mod-p-examen/mod-p-examen.component';
import { AddPInscripcionesComponent } from './tablas-gestion/ABMPeriodoInscripciones/add-p-inscripciones/add-p-inscripciones.component';
import { ElimPInscripcionesComponent } from './tablas-gestion/ABMPeriodoInscripciones/elim-p-inscripciones/elim-p-inscripciones.component';
import { ModPInscripcionesComponent } from './tablas-gestion/ABMPeriodoInscripciones/mod-p-inscripciones/mod-p-inscripciones.component';
import { AddPLectivoComponent } from './tablas-gestion/ABMPeriodoLectivos/add-p-lectivo/add-p-lectivo.component';
import { ModPLectivoComponent } from './tablas-gestion/ABMPeriodoLectivos/mod-p-lectivo/mod-p-lectivo.component';
import { ElimPLectivoComponent } from './tablas-gestion/ABMPeriodoLectivos/elim-p-lectivo/elim-p-lectivo.component';
import { AddTipodecursoComponent } from './tablas-gestion/ABMTipoCursos/add-tipodecurso/add-tipodecurso.component';
import { ModTipodecursoComponent } from './tablas-gestion/ABMTipoCursos/mod-tipodecurso/mod-tipodecurso.component';
import { ElimTipodecursoComponent } from './tablas-gestion/ABMTipoCursos/elim-tipodecurso/elim-tipodecurso.component';
import { AddCursoCarreraComponent } from './tablas-gestion/ABMCarreras/add-curso-carrera/add-curso-carrera.component';
import { AddCursoAreaComponent } from './tablas-gestion/ABMAreaEstudio/add-curso-area/add-curso-area.component';
import { AddDocenteComponent } from './tablas-gestion/ABMDocentes/add-docente/add-docente.component';
import { ModDocenteComponent } from './tablas-gestion/ABMDocentes/mod-docente/mod-docente.component';
import { ElimDocenteComponent } from './tablas-gestion/ABMDocentes/elim-docente/elim-docente.component';
import { DocenteExistenteComponent } from './tablas-gestion/ABMDocentes/docente-existente/docente-existente.component';
import { DocenteNuevoComponent } from './tablas-gestion/ABMDocentes/docente-nuevo/docente-nuevo.component';
import { QuitarCarrerasSedeComponent } from './tablas-gestion/ABMSedes/quitar-carreras-sede/quitar-carreras-sede.component';
import { AddCreditosminimosComponent } from './tablas-gestion/ABMAreaEstudio/add-creditosminimos/add-creditosminimos.component';
import { QuitarCursosAreaComponent } from './tablas-gestion/ABMAreaEstudio/quitar-cursos-area/quitar-cursos-area.component';
import { QuitarCursosCarreraComponent } from './tablas-gestion/ABMCarreras/quitar-cursos-carrera/quitar-cursos-carrera.component';
import { AddAdminsComponent } from './tablas-gestion/ABMAdministrativo/add-admins/add-admins.component';
import { ElimAdminsComponent } from './tablas-gestion/ABMAdministrativo/elim-admins/elim-admins.component';
import { ModAdminsComponent } from './tablas-gestion/ABMAdministrativo/mod-admins/mod-admins.component';
import { AdminExistenteComponent } from './tablas-gestion/ABMAdministrativo/admin-existente/admin-existente.component';
import { AdminNuevoComponent } from './tablas-gestion/ABMAdministrativo/admin-nuevo/admin-nuevo.component';
import { ListarSecretariosComponent } from './tablas-gestion/ABMSecretario/listar-secretarios/listar-secretarios.component';
import { SecretarioNuevoComponent } from './tablas-gestion/ABMSecretario/secretario-nuevo/secretario-nuevo.component';
import { SecretarioExistenteComponent } from './tablas-gestion/ABMSecretario/secretario-existente/secretario-existente.component';
import { ModSecretarioComponent } from './tablas-gestion/ABMSecretario/mod-secretario/mod-secretario.component';
import { AddSecretarioComponent } from './tablas-gestion/ABMSecretario/add-secretario/add-secretario.component';
import { AlimSecretarioComponent } from './tablas-gestion/ABMSecretario/alim-secretario/alim-secretario.component';
import { AddPreviaCursoComponent } from './tablas-gestion/ABMCursos/add-previa-curso/add-previa-curso.component';
import { ElimPreviaCursoComponent } from './tablas-gestion/ABMCursos/elim-previa-curso/elim-previa-curso.component';
import { VerPostulanteComponent } from './tablas-gestion/Postulantes/ver-postulante/ver-postulante.component';
import { AceptarPostulanteComponent } from './tablas-gestion/Postulantes/aceptar-postulante/aceptar-postulante.component';
import { RechazarPostulanteComponent } from './tablas-gestion/Postulantes/rechazar-postulante/rechazar-postulante.component';
import { ClonarPLectivoComponent } from './tablas-gestion/ABMPeriodoLectivos/clonar-p-lectivo/clonar-p-lectivo.component';
import { VerFechaInscComponent } from './tablas-gestion/ABMPeriodoLectivos/ver-fecha-insc/ver-fecha-insc.component';
import { EstablecerFechaInscComponent } from './tablas-gestion/ABMPeriodoLectivos/establecer-fecha-insc/establecer-fecha-insc.component';
import { ModFechaInscComponent } from './tablas-gestion/ABMPeriodoLectivos/mod-fecha-insc/mod-fecha-insc.component';
import { EstabInscExamenComponent } from './tablas-gestion/ABMPeriodoExamenes/estab-insc-examen/estab-insc-examen.component';
import { ModInscExamenComponent } from './tablas-gestion/ABMPeriodoExamenes/mod-insc-examen/mod-insc-examen.component';
import { ListarAdminsComponent } from './tablas-gestion/ABMAdministrativo/listar-admins/listar-admins.component';
import { PreviasComponent } from './previas/previas.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {NgxMatFileInputModule} from '@angular-material-components/file-input';
import { FormLogoutComponent } from './logout/form-logout/form-logout.component';
import { InscribirseCursoComponent } from './pages/inscribirse-curso/inscribirse-curso.component';
import { InscribirseExamenComponent } from './pages/inscribirse-examen/inscribirse-examen.component';
import { ConfirmarInscLectivoComponent } from './pages/inscribirse-curso/confirmar-insc-lectivo/confirmar-insc-lectivo.component';
import { ConfirmarInscExamenComponent } from './pages/inscribirse-examen/confirmar-insc-examen/confirmar-insc-examen.component';
import { CalificarCursoComponent } from './pages/calificar-curso/calificar-curso.component';
import { CalificarExamenComponent } from './pages/calificar-examen/calificar-examen.component';
import { AddCalificacionComponent } from './pages/calificar-curso/add-calificacion/add-calificacion.component';
import { ModCalificacionComponent } from './pages/calificar-curso/mod-calificacion/mod-calificacion.component';
import { AddCalificacionExComponent } from './pages/calificar-examen/add-calificacion-ex/add-calificacion-ex.component';
import { ModCalificacionExComponent } from './pages/calificar-examen/mod-calificacion-ex/mod-calificacion-ex.component';
import { ControlAsistenciasComponent } from './pages/control-asistencias/control-asistencias.component';
import { AddClaseAsistenciaComponent } from './pages/control-asistencias/add-clase-asistencia/add-clase-asistencia.component';
import { ListarAsistenciasComponent } from './pages/control-asistencias/listar-asistencias/listar-asistencias.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { SolicitarEscolaridadComponent } from './pages/solicitar-escolaridad/solicitar-escolaridad.component';
import { ControlCertificadosComponent } from './pages/control-certificados/control-certificados.component';
import { CierreInscripcionesComponent } from './pages/cierre-inscripciones/cierre-inscripciones.component';
import { CierreExamenesComponent } from './pages/cierre-examenes/cierre-examenes.component';
import { CierreCursosComponent } from './pages/cierre-cursos/cierre-cursos.component';

import { ListarActasCursosComponent } from './tablas-gestion/ABMActaCursos/listar-actas-cursos/listar-actas-cursos.component';
import { CierreActasCursosComponent } from './tablas-gestion/ABMActaCursos/cierre-actas-cursos/cierre-actas-cursos.component';
import { ListarActasExamenesComponent } from './tablas-gestion/ABMActaExamenes/listar-actas-examenes/listar-actas-examenes.component';
import { CierreActasExamenesComponent } from './tablas-gestion/ABMActaExamenes/cierre-actas-examenes/cierre-actas-examenes.component';
import { IngresarCertificadoComponent } from './pages/ingresar-certificado/ingresar-certificado.component';
import { CierreTodasActasComponent } from './tablas-gestion/ABMActaCursos/cierre-todas-actas/cierre-todas-actas.component';
import { CierreTodasActasExamenesComponent } from './tablas-gestion/ABMActaExamenes/cierre-todas-actas-examenes/cierre-todas-actas-examenes.component';
import { CierreCursoModalComponent } from './pages/cierre-cursos/cierre-curso-modal/cierre-curso-modal.component';
import { CierreExamenModalComponent } from './pages/cierre-examenes/cierre-examen-modal/cierre-examen-modal.component';
import { CierreInscripcionesModalComponent } from './pages/cierre-inscripciones/cierre-inscripciones-modal/cierre-inscripciones-modal.component';
import { AsignarDocenteLectivoComponent } from './tablas-gestion/ABMPeriodoLectivos/asignar-docente-lectivo/asignar-docente-lectivo.component';
import { AsignarDocenteExamenComponent } from './tablas-gestion/ABMPeriodoExamenes/asignar-docente-examen/asignar-docente-examen.component';
import { ValidarEscolaridadComponent } from './pages/validar-escolaridad/validar-escolaridad.component';
import { InformarPostulanteComponent } from './tablas-gestion/Postulantes/informar-postulante/informar-postulante.component';
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import pdfFonts from "pdfmake/build/vfs_fonts"; // fonts provided for pdfmake
PdfMakeWrapper.setFonts(pdfFonts);
import { NgxCaptchaModule } from 'ngx-captcha';
import * as FusionCharts from "fusioncharts";
import * as TimeSeries from "fusioncharts/fusioncharts.timeseries";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { FusionChartsModule } from "angular-fusioncharts";
import * as charts from "fusioncharts/fusioncharts.powercharts";
import { CambiarPassComponent } from './pages/cambiar-pass/cambiar-pass.component';
import { ClonarExamenComponent } from './tablas-gestion/ABMPeriodoExamenes/clonar-examen/clonar-examen.component';
FusionChartsModule.fcRoot(FusionCharts,charts, TimeSeries, FusionTheme);
import { AuthInterceptorService } from './services/auth-interceptor.service';
FusionChartsModule.fcRoot(FusionCharts,charts, TimeSeries, FusionTheme);

import { NgxGraphModule } from '@swimlane/ngx-graph';
import { HttpErrorInterceptor } from './services/error-interceptor.service';
import { ValidarPostulacionComponent } from './validar-postulacion/validar-postulacion.component';






@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ListarSedesComponent,
    ListarCarrerasComponent,
    ListarDocentesComponent,
    ListarAreasComponent,
    ListarCursosComponent,
    ListarPeriodoExamenesComponent,
    ListarPeriodoInscripcionComponent,
    ListarPeriodoLectivosComponent,
    ListarTipoCursosComponent,
    ContainerAppComponent,
    AdminComponent,
    BienvenidaComponent,
    FormLoginComponent,
    AddSedeComponent,
    EliminarSedeComponent,
    ModificarSedeComponent,
    IncluirCarreraComponent,
    AddAreaComponent,
    ElimAreaComponent,
    ModAreaComponent,
    AddCarreraComponent,
    ElimCarreraComponent,
    ModCarreraComponent,
    AddCursoComponent,
    ElimCursoComponent,
    ModCursoComponent,
    AddPExamenComponent,
    ElimPExamenComponent,
    ModPExamenComponent,
    AddPInscripcionesComponent,
    ElimPInscripcionesComponent,
    ModPInscripcionesComponent,
    AddPLectivoComponent,
    ModPLectivoComponent,
    ElimPLectivoComponent,
    AddTipodecursoComponent,
    ModTipodecursoComponent,
    ElimTipodecursoComponent,
    AddCursoCarreraComponent,
    AddCursoAreaComponent,
    AddDocenteComponent,
    ModDocenteComponent,
    ElimDocenteComponent,
    DocenteExistenteComponent,
    DocenteNuevoComponent,
    QuitarCarrerasSedeComponent,
    AddCreditosminimosComponent,
    QuitarCursosAreaComponent,
    QuitarCursosCarreraComponent,
    ListarAdminsComponent,
    AddAdminsComponent,
    ElimAdminsComponent,
    ModAdminsComponent,
    AdminExistenteComponent,
    AdminNuevoComponent,
    ListarSecretariosComponent,
    SecretarioNuevoComponent,
    SecretarioExistenteComponent,
    ModSecretarioComponent,
    AddSecretarioComponent,
    AlimSecretarioComponent,
    AddPreviaCursoComponent,
    ElimPreviaCursoComponent,
    VerPostulanteComponent,
    AceptarPostulanteComponent,
    RechazarPostulanteComponent,
    ClonarPLectivoComponent,
    VerFechaInscComponent,
    EstablecerFechaInscComponent,
    ModFechaInscComponent,
    EstabInscExamenComponent,
    ModInscExamenComponent,
    PreviasComponent,
    FormLogoutComponent,
    InscribirseCursoComponent,
    InscribirseExamenComponent,
    ConfirmarInscLectivoComponent,
    ConfirmarInscExamenComponent,
    CalificarCursoComponent,
    CalificarExamenComponent,
    AddCalificacionComponent,
    ModCalificacionComponent,
    AddCalificacionExComponent,
    ModCalificacionExComponent,
    ControlAsistenciasComponent,
    AddClaseAsistenciaComponent,
    ListarAsistenciasComponent,

    MensajeComponent,


    SolicitarEscolaridadComponent,

    ControlCertificadosComponent,

    CierreInscripcionesComponent,

    CierreExamenesComponent,

    CierreCursosComponent,

 

    ListarActasCursosComponent,

    CierreActasCursosComponent,

    ListarActasExamenesComponent,

    CierreActasExamenesComponent,

    IngresarCertificadoComponent,

    CierreTodasActasComponent,

    CierreTodasActasExamenesComponent,

    CierreCursoModalComponent,

    CierreExamenModalComponent,

    CierreInscripcionesModalComponent,

    AsignarDocenteLectivoComponent,

    AsignarDocenteExamenComponent,

    ValidarEscolaridadComponent,

    InformarPostulanteComponent,

    CambiarPassComponent,

    ClonarExamenComponent,

    ValidarPostulacionComponent,
 






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatDialogModule,  
    HttpClientModule,
    NgxCaptchaModule,
    FusionChartsModule,
    NgxGraphModule,
    ReactiveFormsModule,
    NgxMatFileInputModule
  ],
 
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass: AuthInterceptorService,multi: true},
    {provide: HTTP_INTERCEPTORS,useClass: HttpErrorInterceptor,multi: true}
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
