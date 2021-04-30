import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreaDeEstudioService {

  constructor(private http:HttpClient) { }

//$router->get('/AreasDeEstudio', 'AreasDeEstudioController@index');
getAreasDeEstudio():Observable<any>{
  return this.http.get("http://localhost:8000/AreasDeEstudio");
}

//$router->post('/AreasDeEstudio/create', 'AreasDeEstudioController@create');
postAreaDeEstudio(area):Observable<any>{
  return this.http.post("http://localhost:8000/AreasDeEstudio/create",area);
}

//$router->post('/AreasDeEstudio/update/{id}', 'AreasDeEstudioController@update');
putAreaDeEstudio(area):Observable<any>{
  return this.http.post("http://localhost:8000/AreasDeEstudio/update/"+area.idareadeestudio,area);
}

//$router->get('/AreasDeEstudio/destroy/{id}', 'AreasDeEstudioController@destroy');
deleteAreaDeEstudio(id):Observable<any>{
  return this.http.get("http://localhost:8000/AreasDeEstudio/destroy/"+id);
}

//$router->get('/AreasDeEstudio/{id}', 'AreasDeEstudioController@getAreasDeEstudio');
getAreaDeEstudio(id):Observable<any>{
  return this.http.get("http://localhost:8000/AreasDeEstudio/"+id);
}

//$router->post('/AreasDeEstudio/addcurso', 'AreasDeEstudioController@addcurso');
addCurso(ides):Observable<any>{
  return this.http.post("http://localhost:8000/AreasDeEstudio/addcurso",ides);
}

//$router->post('/AreasDeEstudio/quitcurso', 'AreasDeEstudioController@quitcurso');
quitCurso(ides):Observable<any>{
  return this.http.post("http://localhost:8000/AreasDeEstudio/quitcurso",ides);
}

//$router->post('/AreasDeEstudio/addCredito', 'AreasDeEstudioController@addCredito');
addCredito(idacre):Observable<any>{
  return this.http.post("http://localhost:8000/AreasDeEstudio/addCredito",idacre);
}

}
