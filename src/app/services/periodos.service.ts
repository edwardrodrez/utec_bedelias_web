import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeriodosService {

  constructor(private http:HttpClient) { }

  //$router->get('/Periodos/getLectivos', 'PeriodosController@getLectivos');
  getLectivos():Observable<any>{
    return this.http.get("http://localhost:8000/Periodos/getLectivos");
  }
  //$router->get('/Periodos/getExamenes', 'PeriodosController@getExamenes');
  getExamenes():Observable<any>{
    return this.http.get("http://localhost:8000/Periodos/getExamenes");
  }
  //$router->get('/Periodos/getLectivosSecretario', 'PeriodosController@getLectivosSecretario');

  //$router->get('/Periodos/getExsamenesSecretario', 'PeriodosController@getExsamenesSecretario');

  //$router->get('/Periodos/getLectivosActuales', 'PeriodosController@getLectivosActuales');
  getLectivosActuales():Observable<any>{
    return this.http.get("http://localhost:8000/Periodos/getLectivosActuales");
  }
  //$router->get('/Periodos/getExamenesActuales', 'PeriodosController@getExamenesActuales');
  getExamenesActuales():Observable<any>{
    return this.http.get("http://localhost:8000/Periodos/getExamenesActuales");
  }
  //$router->get('/Periodos/getLectivosAdmin', 'PeriodosController@getLectivosAdmin');

  //$router->get('/Periodos/getExsamenesAdmin', 'PeriodosController@getExsamenesAdmin');

  //$router->post('/Periodos/create', 'PeriodosController@create');
  postPeriodo(elem):Observable<any>{
    return this.http.post("http://localhost:8000/Periodos/create",elem);
  }
  //$router->post('/Periodos/update/{id}', 'PeriodosController@update');
  UpdatePeriodo(elem):Observable<any>{
    return this.http.post("http://localhost:8000/Periodos/update/"+elem.idperiodo,elem);
  }
  //$router->get('/Periodos/destroy/{id}', 'PeriodosController@destroy');
  DeletePeriodo(elem):Observable<any>{
    return this.http.get("http://localhost:8000/Periodos/destroy/"+elem.idperiodo);
  }
  //$router->get('/Periodos/{id}', 'PeriodosController@getSede');

  //$router->post('/Periodos/addDocente', 'PeriodosController@addDocente');
  addDocente(elem):Observable<any>{
    return this.http.post("http://localhost:8000/Periodos/addDocente",elem);
  }
  //$router->post('/Periodos/quitDocente', 'PeriodosController@quitDocente');

  //$router->post('/Periodos/addfechainscripcion', 'PeriodosController@addfechainscripcion');

  addfechainscripcion(elem):Observable<any>{
    return this.http.post("http://localhost:8000/Periodos/addfechainscripcion",elem);
  }
  //$router->post('/Periodos/quitfechainscripcion', 'PeriodosController@quitfechainscripcion');

  //$router->post('/Periodos/updatefechainscripcion', 'PeriodosController@updatefechainscripcion');
  updatefechainscripcion(elem):Observable<any>{
    return this.http.post("http://localhost:8000/Periodos/updatefechainscripcion",elem);
  }
  //$router->post('/Periodos/addEstudiante', 'PeriodosController@addEstudiante');

  //$router->post('/Periodos/cerrarInscripcion', 'PeriodosController@cerrarInscripcion');

  //$router->post('/Periodos/getActas/{id}', 'PeriodosController@getActas');

  //$router->post('/Periodos/cerrarActasAll', 'PeriodosController@cerrarActasAll');

  //$router->post('/Periodos/cerrarActa', 'PeriodosController@cerrarActa');

  //$router->post('/Periodos/calificarActa', 'PeriodosController@calificarActa');

  //$router->post('/Periodos/getLectivosAlumno', 'PeriodosController@getLectivosAlumno');

  //$router->post('/Periodos/addClase', 'PeriodosController@addClase');

  //$router->post('/Periodos/getClase', 'PeriodosController@getClase');

  //$router->post('/Periodos/getAssistencias', 'PeriodosController@getAssistencias');

  //$router->post('/Periodos/addAssistencias', 'PeriodosController@addAssistencias');


}
