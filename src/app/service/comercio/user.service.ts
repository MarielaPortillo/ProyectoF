import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Rol } from 'src/app/models/comercio/rol';
import { users } from 'src/app/models/comercio/usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL = 'http://localhost:3000';
  constructor(
    private http: HttpClient,
    private router: Router
    
  ) { }
  listUser(): Observable<users[]> {
    return this.http.get<users[]>(this.URL + '/listadoUsuarios');
  }
  getRol(): Observable<Rol[]>{
    return this.http.get<Rol[]>(this.URL+'/listRole');
  };
  oneUser(id: String | undefined): Observable<users> {
    console.log(id);
    return this.http.get<users>(this.URL + '/buscarUsuario/'+id);
  }
  addUser(user: users): Observable<users> {
    return this.http.post<users>(this.URL + '/createUser', user);
  }
  
  createUser(user: users): Observable<users> {
    return this.http.post<users>(this.URL + '/signup', user);
  }
  editUser(id: String |undefined , user: users): Observable<users> {
    console.log(id);
    return this.http.put<users>(this.URL + '/editarUsuario/'+id, user);
  }
  deleteUser(id: string): Observable<users> {
    console.log(id);
    return this.http.delete<users>(this.URL + '/eliminarUsuario/'+id);
  }
}
