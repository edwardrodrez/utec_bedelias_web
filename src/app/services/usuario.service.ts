import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }


  //$router->get('/usuarios', 'UsuarioController@index')
  getUsuarios():Observable<any>{
    return this.http.get("http://localhost:8000/usuarios");
  }
  //$router->get('/usuario/getUsuarioId/{id}', 'UsuarioController@getUsuarioId');
  getUsuario(id):Observable<any>{
    return this.http.get("http://localhost:8000/usuario/getUsuarioId/"+id);
  }
  //$router->get('/usuarios/getDocentes', 'UsuarioController@getDocentes');
  getDocentes():Observable<any>{
    return this.http.get("http://localhost:8000/usuarios/getDocentes");
  }
  //$router->get('/usuarios/getAdmin', 'UsuarioController@getAdmin');
  getAdmins():Observable<any>{
    return this.http.get("http://localhost:8000/usuarios/getAdmin");
  }
  //$router->get('/usuarios/getSecretarios', 'UsuarioController@getSecretarios');
  getSecretarios():Observable<any>{
    return this.http.get("http://localhost:8000/usuarios/getSecretarios");
  }
  //$router->get('/usuario/getLectivosDocentes/{id}', 'UsuarioController@getLectivosDocentes');
  getLectivoDocentes(id):Observable<any>{
    return this.http.get("http://localhost:8000/usuario/getLectivosDocentes/"+id);
  }
  //$router->get('/usuario/getExsamenDocentes/{id}', 'UsuarioController@getExsamenDocentes');
  getExsamenDocentes(id):Observable<any>{
    return this.http.get("http://localhost:8000/usuario/getExsamenDocentes/"+id);
  }
  //$router->post('/usuario/create', 'UsuarioController@create');
  postUsuario(usu):Observable<any>{
    return this.http.post("http://localhost:8000/usuario/create",usu);
  }
  //$router->post('/usuario/addDocente/{id}', 'UsuarioController@addDocente');
  addDocente(id):Observable<any>{
    return this.http.post("http://localhost:8000/usuario/addDocente/"+id,{});
  }
  //$router->post('/usuario/addEstudiante/{id}', 'UsuarioController@addEstudiante');
  addEstudiante(id):Observable<any>{
    return this.http.post("http://localhost:8000/usuario/addEstudiante/"+id,{});
  }
  //$router->post('/usuario/addSecretario/{id}', 'UsuarioController@addSecretario');
  addSecretario(id):Observable<any>{
    return this.http.post("http://localhost:8000/usuario/addSecretario/"+id,{});
  }
  //$router->post('/usuario/addAdministrativo/{id}', 'UsuarioController@addAdministrativo');
  addAdmin(id):Observable<any>{
    return this.http.post("http://localhost:8000/usuario/addAdministrativo/"+id,{});
  }
  //$router->post('/usuario/getUsuarioCi', 'UsuarioController@getUsuarioCi');
  getUsuarioCi(per):Observable<any>{
    return this.http.post("http://localhost:8000/usuario/getUsuarioCi",per);
  }

  //$router->post('/usuario/quitDocente/{id}', 'UsuarioController@quitDocente');
  quitDocente(id):Observable<any>{
    return this.http.post("http://localhost:8000/usuario/quitDocente/"+id,id);
  }
  //$router->post('/usuario/quitSecretario/{id}', 'UsuarioController@quitSecretario');
  quitSecretario(id):Observable<any>{
    return this.http.post("http://localhost:8000/usuario/quitSecretario/"+id,id);
  }
  //$router->post('/usuario/quitAdministrativo/{id}', 'UsuarioController@quitAdministrativo');
  quitAdministrativo(id):Observable<any>{
    return this.http.post("http://localhost:8000/usuario/quitAdministrativo/"+id,id);
  }
  //$router->post('/usuario/edit', 'UsuarioController@edit');
  edit(usu):Observable<any>{
    return this.http.post("http://localhost:8000/usuario/edit",usu);
  }
  //$router->post('/usuario/cambiarPass', 'UsuarioController@cambiarPass');
  cambiarPass(usu):Observable<any>{
    return this.http.post("http://localhost:8000/usuario/cambiarPass",usu);
  }
  
}
