
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { peliculas } from '../../models/cineApp/pelicula';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class PeliculaService {


    bs: string = 'http://localhost:3000';

  constructor(private http: HttpClient,
                private activatedRoiuter:ActivatedRoute) { 
    
  }

  getPeliculas(): Observable<peliculas[]>{
    return this.http.get<peliculas[]>(this.bs +'/listMovie', );
  }
  
  getPelicula(id: string | undefined): Observable<peliculas>{
    return this.http.get<peliculas>(this.bs +'/oneMovie/' + id, )
  }

  getPeliculaTitulo(): Observable<peliculas[]>{
    return this.http.get<peliculas[]>(this.bs +'/searchMovie',)
  }

  createPelicula(pelicula: peliculas): Observable<peliculas>{
    return this.http.post<peliculas>(this.bs +'/newMovie', pelicula,)
  }
    
  updatePelicula(id: string | undefined, pelicula: peliculas): Observable<peliculas>{
    return this.http.put<peliculas>(this.bs + '/updateMovie/' + id, pelicula)
  }
  deletePelicula(id: string | undefined ): Observable<peliculas>{
    console.log(id);
    return this.http.delete<peliculas>(this.bs +'/deleteMovie/'+ id)
  }
  
}
 
