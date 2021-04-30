import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrera } from '../interfaces/carrera';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  constructor(private http:HttpClient) { }

  //$router->get('/Carreras', 'CarrerasController@index');  
  getCarreras():Observable<any>{
    return this.http.get("http://localhost:8000/Carreras");
  }

  //$router->get('/Carrera/{id}', 'CarrerasController@getSede');
  getCarrera(id : number):Observable<any>{
    return this.http.get("http://localhost:8000/Carrera/"+id);
  };

  //$router->post('/Carrera/update/{id}', 'CarrerasController@update');
  putCarrera(car:Carrera):Observable<any>{
    return this.http.post("http://localhost:8000/Carrera/update/"+car.idcarrera,car);
  };

  //$router->get('/Carrera/destroy/{id}', 'CarrerasController@destroy');
  deleteCarrera(id:number):Observable<any>{
    return this.http.get("http://localhost:8000/Carrera/destroy/"+id);
  };

  //$router->post('/Carrera/create', 'CarrerasController@create');
  postCarrera(car:Carrera):Observable<any>{
    return this.http.post("http://localhost:8000/Carrera/create",car);
  }

  //$router->post('/Carrera/addcurso', 'CarrerasController@addcurso');
  addCurso(ides):Observable<any>{
    return this.http.post("http://localhost:8000/Carrera/addcurso",ides);
  }

  //$router->post('/Carrera/quitcurso', 'CarrerasController@quitcurso');
  quitCurso(ides):Observable<any>{
    return this.http.post("http://localhost:8000/Carrera/quitcurso",ides);
  }

  //$router->post('/Carrera/getSedes/{id}', 'CarrerasController@getSedes');
  getCarreraSedes(id):Observable<any>{
    return this.http.get("http://localhost:8000/Carrera/getSedes/"+id)
  }

}
