import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { peliculas } from 'src/app/models/cineApp/pelicula';
import { comentarios } from 'src/app/models/comentario';
import { Comercio } from 'src/app/models/comercio/comercio';
import { Comentario } from 'src/app/models/publicacion/comentario';
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
  onePublicacion(id: String | undefined): Observable<Detalle> {
    return this.http.get<Detalle>(this.URL + '/obtenerOne/'+id);
  }
  aumentarViews(id: String | undefined): Observable<Detalle> {
    return this.http.get<Detalle>(this.URL + '/publicacion/'+id);
  }
  comercios(): Observable<Comercio[]> {
    return this.http.get<Comercio[]>(this.URL + '/listadoComercios');
  }
  Movies(): Observable<peliculas[]> {
    return this.http.get<peliculas[]>(this.URL + '/listMovie');
  }

  createPublicacion(publicacion: Detalle): Observable<Detalle> {
    return this.http.post<Detalle>(this.URL + '/createPublicacion', publicacion);
  }
  aumentarLike(id: String | undefined, detalle: Detalle): Observable<Detalle> {
    return this.http.post<Detalle>(this.URL + '/publicacion/' +id+ '/like' , detalle);
  }
  createComentario(id: String | undefined, comentario: comentarios): Observable<comentarios> {
    return this.http.post<comentarios>(this.URL + '/publicacion/' +id+ 'comment', comentario);
  }
  deletePublicacion(id: string | undefined): Observable<Detalle> {
    return this.http.delete<Detalle>(this.URL + '/publicacion/delete/'+id);
  }
}
