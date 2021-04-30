import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  constructor(private http:HttpClient) { }

  //$router->get('/Inscripcion', 'InscripciónController@index');
  getPeriosdoDeInscripcion():Observable<any>{
    return this.http.get("http://localhost:8000/Inscripcion");
  }

  //$router->get('/Inscripcion/destroy/{id}', 'InscripciónController@destroy');
  deletePeriodoDeInscripcion(id):Observable<any>{
    return this.http.get("http://localhost:8000/Inscripcion/destroy/"+id);
  }
  //$router->get('/Inscripcion/getPeriodoInscripcionesValidas', 'InscripciónController@getPeriodoInscripcionesValidas');
  getPeriodosDeInscripcionValidos():Observable<any>{
    return this.http.get("http://localhost:8000/Inscripcion/getPeriodoInscripcionesValidas");
  }
  //$router->post('/Inscripcion/create', 'InscripciónController@create');
  createPeriodoDeInscripcion(pdi):Observable<any>{
    return this.http.post("http://localhost:8000/Inscripcion/create",pdi);
  }
  //$router->post('/Inscripcion/update/{id}', 'InscripciónController@update');
  updatePeriodoDeInscripcion(pdi):Observable<any>{
    return this.http.post("http://localhost:8000/Inscripcion/update/"+pdi.id,pdi);
  }
  //$router->post('/Inscripcion/addInscripcion', 'InscripciónController@addInscripcion');
  AddInscripcion(ins):Observable<any>{
    return this.http.post("http://localhost:8000/Inscripcion/addInscripcion",ins);
  }
  //$router->post('/Inscripcion/Aceptarinscripcion', 'InscripciónController@Aceptarinscripcion');
  Aceptarinscripcion(idi):Observable<any>{
    return this.http.post("http://localhost:8000/Inscripcion/Aceptarinscripcion",idi);
  }
  //$router->post('/Inscripcion/DenegarInscripcion', 'InscripciónController@DenegarInscripcion');
  DenegarInscripcion(dto):Observable<any>{
    return this.http.post("http://localhost:8000/Inscripcion/DenegarInscripcion",dto);
  }
  //$router->post('/Inscripcion/informarInscripcion', 'InscripciónController@informarInscripcion');
  informarInscripcion(dto):Observable<any>{
    return this.http.post("http://localhost:8000/Inscripcion/informarInscripcion",dto);
  }
  //$router->post('/Inscripcion/updateInscripcion', 'InscripciónController@updateInscripcion');
  updateInscripcion(ins):Observable<any>{
    return this.http.post("http://localhost:8000/Inscripcion/updateInscripcion",ins);
  }
  //$router->post('/Inscripcion/getInscripcionesDePeriodo', 'InscripciónController@getInscripcionesDePeriodo');
  getInscripcionesDePeriodo(id):Observable<any>{
    return this.http.post("http://localhost:8000/Inscripcion/getInscripcionesDePeriodo",id);
    }
    //$router->post('/Inscripcion/addInscripcion', 'InscripciónController@addInscripcion');
  addInscripcion(ins):Observable<any>{
    return this.http.post("http://localhost:8000/Inscripcion/addInscripcion",ins);
  };  
  //$router->get('/Inscripcion/getPeriodoInscripcionesValidas', 'InscripciónController@getPeriodoInscripcionesValidas');
  getPeriodosInscripcionPostulantes():Observable<any>{
    return this.http.get("http://localhost:8000/Inscripcion/getPeriodoInscripcionesValidas");
  };


}
