import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tiposdecurso } from '../interfaces/tipodecurso';

@Injectable({
  providedIn: 'root'
})
export class TipoDeCursoService {

  constructor(private http:HttpClient) { }

//$router->get('/TipoDeCurso', 'TiposDeCursosController@index');
getTiposDeCurso():Observable<any>{
  return this.http.get("http://localhost:8000/TipoDeCurso/");
  }
//$router->post('/TipoDeCurso/create', 'TiposDeCursosController@create');
postTipoDeCurso(tpdc):Observable<any>{
  return this.http.post("http://localhost:8000/TipoDeCurso/create",tpdc);
}

//$router->post('/TipoDeCurso/update/{id}', 'TiposDeCursosController@update');
putTipoDeCurso(tpdc:Tiposdecurso):Observable<any>{
  return this.http.post("http://localhost:8000/TipoDeCurso/update/"+tpdc.idtiposDeCurso,tpdc);
}

//$router->get('/TipoDeCurso/destroy/{id}', 'TiposDeCursosController@destroy');
deleteTipoDeCurso(id):Observable<any>{
  return this.http.get("http://localhost:8000/TipoDeCurso/destroy/"+id);
}

//$router->get('/TipoDeCurso/{id}', 'TiposDeCursosController@getTipoDeCurso');
getTipoDeCurso(id):Observable<any>{
  return this.http.get("http://localhost:8000/TipoDeCurso/"+id);
}

}
