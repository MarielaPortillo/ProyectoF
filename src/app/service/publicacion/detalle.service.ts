import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Detalle } from 'src/app/models/publicacion/detalle';

@Injectable({
  providedIn: 'root'
})
export class DetalleService {

  private URL = 'http://localhost:3000';
  constructor(
    private http: HttpClient
  ) { }
  listPublicacion(): Observable<Detalle[]> {
    return this.http.get<Detalle[]>(this.URL + '/publicacion');
  }
  onePublicacion(id: String): Observable<Detalle[]> {
    return this.http.get<Detalle[]>(this.URL + '/publicacion/'+id);
  }

  createPublicacion(publicacion: Detalle): Observable<Detalle> {
    return this.http.post<Detalle>(this.URL + '/publicacion/create', publicacion);
  }
  aumentarLike(id: String): Observable<Detalle[]> {
    return this.http.get<Detalle[]>(this.URL + '/publicacion/'+id+'like');
  }
  createComentario(id: String): Observable<Detalle[]> {
    return this.http.get<Detalle[]>(this.URL + '/publicacion/'+id+'comment');
  }
  deletePublicacion(id: string): Observable<Detalle> {
    return this.http.delete<Detalle>(this.URL + '/publicacion/delete/'+id);
  }
}
