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
  listComercio(): Observable<User[]> {
    return this.http.get<User[]>(this.URL + '/listadoUsuarios');
  }
  getCategoria(): Observable<Rol[]>{
    return this.http.get<Rol[]>(this.URL+'/listRole');
  };
  oneComercio(id: String): Observable<User[]> {
    return this.http.get<User[]>(this.URL + '/buscarUsuario/'+id);
  }

  createComercio(comercio: User): Observable<User> {
    return this.http.post<User>(this.URL + '/signup', comercio);
  }
  editComercio(comercio: User, id: String): Observable<User> {
    return this.http.put<User>(this.URL + '/editarUsuario/'+id, comercio);
  }
  deleteComercio(id: string): Observable<User> {
    return this.http.delete<User>(this.URL + '/eliminarUsuario/'+id);
  }
}
