import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carrera } from '../interfaces/carrera';

@Injectable({
  providedIn: 'root'
})
export class CalificarService {

  constructor(private http:HttpClient) { }

  getLectivosDocentes(id : string):Observable<any>{
    return this.http.get("http://localhost:8000/usuario/getLectivosDocentes/"+id);
  };

  calificarActa(data:any):Observable<any>{
    return this.http.post("http://localhost:8000/Periodos/calificarActa",data)
  };

  getExsamenDocentes(id : string):Observable<any>{
    return this.http.get("http://localhost:8000/usuario/getExsamenDocentes/"+id);
  };

  getClase(data:any):Observable<any>{
    return this.http.post("http://localhost:8000/Periodos/getClase",data)
  };

  addClase(data:any):Observable<any>{
    return this.http.post("http://localhost:8000/Periodos/addClase",data)
  };

  getAssistencias(data:any):Observable<any>{
    return this.http.post("http://localhost:8000/Periodos/getAssistencias",data)
  };

  addAssistencias(data:any):Observable<any>{
    return this.http.post("http://localhost:8000/Periodos/addAssistencias",data)
  };

}
