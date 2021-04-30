import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(private http:HttpClient) { }


    //$router->get('/Carrera/getCarrerasUs/{id}', 'CarrerasController@getCarrerasUs');
    getCarrerasUs(id:number):Observable<any>{
      return this.http.get("http://localhost:8000/Carrera/getCarrerasUs/"+id);
    };

    //$router->post('/usuario/getEscolaridadInfo', 'UsuarioController@addCertificados');
    getEscolaridadInfo(us):Observable<any>{
      return this.http.post("http://localhost:8000/usuario/getEscolaridadInfo",us);
    };

    //$router->post('/usuario/getEscolaridadPdf', 'UsuarioController@getEscolaridadPdf');
    getEscolaridadPdf(us):Observable<any>{
      return this.http.post("http://localhost:8000/usuario/getEscolaridadPdf",us);
    };

    //$router->post('/usuario/addEscolaridad', 'UsuarioController@addEscolaridad');
    addEscolaridad(us):Observable<any>{
      return this.http.post("http://localhost:8000/usuario/addEscolaridad",us);
    };

    //$router->post('/Periodos/getLectivosAlumno', 'PeriodosController@getLectivosAlumno');
    getLectivosAlumno(us):Observable<any>{
      return this.http.post("http://localhost:8000/Periodos/getLectivosAlumno",us);
    };
    
    //$router->post('/Periodos/getExamenAlumno', 'PeriodosController@getExamenAlumno');
    getExamenAlumno(us):Observable<any>{
      return this.http.post("http://localhost:8000/Periodos/getExamenAlumno",us);
    };
}
