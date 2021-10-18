import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Rol } from 'src/app/models/comercio/rol';
import { User } from 'src/app/models/comercio/usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL = 'http://localhost:3000';
  constructor(
    private http: HttpClient,
    private router: Router
    
  ) { }
  listUser(): Observable<User[]> {
    return this.http.get<User[]>(this.URL + '/listadoUsuarios');
  }
  getRol(): Observable<Rol[]>{
    return this.http.get<Rol[]>(this.URL+'/listRole');
  };
  oneUser(id: String): Observable<User[]> {
    return this.http.get<User[]>(this.URL + '/buscarUsuario/'+id);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.URL + '/signup', user);
  }
  editUser(id: String | undefined, user: User): Observable<User> {
    return this.http.put<User>(this.URL + '/editarUsuario/'+id, user);
  }
  deleteUser(id: string): Observable<User> {
    return this.http.delete<User>(this.URL + '/eliminarUsuario/'+id);
  }
}
