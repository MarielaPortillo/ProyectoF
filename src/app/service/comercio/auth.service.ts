import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtResponse } from 'src/app/models/comercio/jwtoken';
import { Rol } from 'src/app/models/comercio/rol';
import { User } from 'src/app/models/comercio/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000';
  constructor(
              private http: HttpClient, 
              private router: Router,
  ) { }
  

  signInUser(jwtoken: JwtResponse): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.URL + '/signin', jwtoken);
  }
  getRol(): Observable<Rol[]>{
    return this.http.get<Rol[]>(this.URL+'/listRole');
  };

  signUpUser(user: User): Observable<User> {
    return this.http.post<User>(this.URL + '/signup', user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  rolAdmin() {
    return !!localStorage.getItem('rol');
  }
  rolSupervisor() {
    return !!localStorage.getItem('rol');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    localStorage.removeItem('expira');
    this.router.navigate(['/signin']);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
