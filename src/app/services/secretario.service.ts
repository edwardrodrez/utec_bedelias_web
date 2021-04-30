import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecretarioService {

  constructor(private http:HttpClient) { }

    //$router->get('/Inscripcion/getPeriodoInscripcionesValidas', 'InscripciónController@getPeriodoInscripcionesValidas');
    getPeriodosInscripciones():Observable<any>{
      return this.http.get("http://localhost:8000/Inscripcion");
    };
    // $router->get('/Periodos/getLectivosSecretario', 'PeriodosController@getLectivosSecretario');
    getPeriodosLectivos():Observable<any>{
      return this.http.get("http://localhost:8000/Periodos/getLectivosSecretario");
    };
    //$router->get('/Periodos/getExsamenesSecretario', 'PeriodosController@getExsamenesSecretario');
    getPeriodosExamenes():Observable<any>{
      return this.http.get("http://localhost:8000/Periodos/getExsamenesSecretario");
    };
   
    //$router->post('/Periodos/cerrarInscripcion', 'PeriodosController@cerrarInscripcion');
    cerrarPeriodo(id):Observable<any>{
      return this.http.post("http://localhost:8000/Periodos/cerrarInscripcion",id);
    };  

    //$router->post('/usuario/getUsuarioCi', 'UsuarioController@getUsuarioCi');
    getUsuarioCi(ci):Observable<any>{
      return this.http.post("http://localhost:8000/usuario/getUsuarioCi",ci);
    }; 

    //$router->post('/usuario/addCertificados', 'UsuarioController@addCertificados');
    addCertificados(ci):Observable<any>{
      return this.http.post("http://localhost:8000/usuario/addCertificados",ci);
    }; 

}
