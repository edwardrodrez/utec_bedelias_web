import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CierreActasService {

  constructor(private http:HttpClient) { }

  getLectivosAdmin():Observable<any>{
    return this.http.get("http://localhost:8000/Periodos/getLectivosAdmin");
  };

  getExsamenesAdmin():Observable<any>{
    return this.http.get("http://localhost:8000/Periodos/getExsamenesAdmin");
  };

  cerrarActa(data:any):Observable<any>{
    return this.http.post("http://localhost:8000/Periodos/cerrarActa",data);
  };

  cerrarActasAll(data:any):Observable<any>{
    return this.http.post("http://localhost:8000/Periodos/cerrarActasAll",data);
  };

  getActas(data:any):Observable<any>{
    return this.http.post("http://localhost:8000/Periodos/getActas/"+data,{});
  };


}
