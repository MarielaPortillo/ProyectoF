import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/models/comercio/categoria';
import { Comercio } from 'src/app/models/comercio/comercio';

@Injectable({
  providedIn: 'root'
})
export class ComercioService {

  private URL = 'http://localhost:3000';
  selectedComercio: Comercio;
  comercio: Comercio[];
  constructor(
    private http: HttpClient, 
    private router: Router,
  ) { }
  listComercio(): Observable<Comercio[]> {
    return this.http.get<Comercio[]>(this.URL + '/listadoComercios');
  }
  getCategoria(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.URL+'/listCategorias');
  };
  oneComercio(id: String | undefined): Observable<Comercio[]> {
    return this.http.get<Comercio[]>(this.URL + '/uno/'+id);
  }

  createComercio(comercio: Comercio): Observable<Comercio> {
    return this.http.post<Comercio>(this.URL + '/registrar', comercio);
  }
 
  editComercio(comercio: Comercio): Observable<Comercio> {
    return this.http.put<Comercio>(this.URL + '/editarComercio/'+`${comercio._id}`, comercio);
  }
  deleteComercio(id: string): Observable<Comercio> {
    return this.http.delete<Comercio>(this.URL + '/eliminarComercio/'+id);
  }

}
