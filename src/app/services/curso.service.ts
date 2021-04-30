import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http:HttpClient) { }

 //$router->get('/Cursos', 'CursosController@index');
 getCursos():Observable<any>{
   return this.http.get("http://localhost:8000/Cursos");
 }

 // $router->post('/Curso/create', 'CursosController@create');
 postCurso(curso):Observable<any>{
   return this.http.post("http://localhost:8000/Curso/create",curso);
 }

 // $router->post('/Curso/update/{id}', 'CursosController@update');
 putCurso(curso):Observable<any>{
   return this.http.post("http://localhost:8000/Curso/update/"+curso.idcurso,curso);
 }

 // $router->get('/Curso/destroy/{id}', 'CursosController@destroy');
 deleteCurso(id):Observable<any>{
   return this.http.get("http://localhost:8000/Curso/destroy/"+id);
 }

 // $router->get('/Curso/{id}', 'CursosController@getSede');
 getCurso(id):Observable<any>{
   return this.http.get("http://localhost:8000/Curso/"+id);
 }

 // $router->post('/Curso/addcarrera', 'CursosController@addcarrera');
 addPrevia(pre):Observable<any>{
   return this.http.post("http://localhost:8000/Curso/addprevia",pre);
 }

 // $router->post('/Curso/quitcarrera', 'CursosController@quitcarrera');
 quitPrevia(ides):Observable<any>{
   return this.http.post("http://localhost:8000/Curso/quitprevia",ides);
 }

  //$router->get('/Curso/getCarreras/{id}', 'CursosController@getCarreras');
  getCarrerasCurso(id):Observable<any>{
    return this.http.get("http://localhost:8000/Curso/getCarreras/"+id);
  }

  //$router->post('/Curso/getPrevias', 'CursosController@getPrevias');
  getPrevias(ides):Observable<any>{
    return this.http.post("http://localhost:8000/Curso/getPrevias",ides);
  }

  //$router->get('/Cursos/getCursoSinArea', 'CursosController@getCursoSinArea');
  getCursosinArea():Observable<any>{
    return this.http.get("http://localhost:8000/Cursos/getCursoSinArea");
  }

  
}
