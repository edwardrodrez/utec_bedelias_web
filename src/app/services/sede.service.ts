import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sede } from '../interfaces/sede';

@Injectable({
  providedIn: 'root'
})
export class SedeService {

  constructor(private http:HttpClient) { }


  getSedes():Observable<any>{
    return this.http.get("http://localhost:8000/sedes")
  }

  getSede(id : number):Observable<any>{
    return this.http.get("http://localhost:8000/sede/"+id)
  };

  putSede(sed:Sede):Observable<any>{
    return this.http.post("http://localhost:8000/sede/update/"+sed.idsede,sed)
  };

  deleteSede(id:number):Observable<any>{
    return this.http.get("http://localhost:8000/sede/destroy/"+id)
  };

  postSede(sed:Sede):Observable<any>{
    return this.http.post("http://localhost:8000/sede/create",sed)
  };

  addCarrera(ides):Observable<any>{
    return this.http.post("http://localhost:8000/sede/addcarrera",ides)
  };

  quitCarrera(ides):Observable<any>{
    return this.http.post("http://localhost:8000/sede/quitcarrera",ides)
  };
  
}
