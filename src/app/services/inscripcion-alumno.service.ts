import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carrera } from '../interfaces/carrera';

@Injectable({
  providedIn: 'root'
})
export class InscripcionAlumnoService {

  constructor(private http:HttpClient) { }

  getLectivosAlumno(id : string):Observable<any>{
    console.log(id)
    return this.http.post("http://localhost:8000/Periodos/getLectivosAlumno",{idusuario:id});
  };

  addEstudiante(data:any):Observable<any>{
    console.log(data);
    return this.http.post("http://localhost:8000/Periodos/addEstudiante",data)
  };

  Validacion(data:any):Observable<any>{
    return this.http.post("http://localhost:8000/usuario/Validacion",data)
  };

  getExamenAlumno(id : string):Observable<any>{
    console.log(id)
    return this.http.post("http://localhost:8000/Periodos/getExamenAlumno",{idusuario:id});
  };
}
