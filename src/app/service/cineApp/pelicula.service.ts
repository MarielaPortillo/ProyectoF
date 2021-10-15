import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { peliculas } from '../../models/cineApp/pelicula';


const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'userid':'1'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

    bs: string = 'http://localhost:3000';

  constructor(private http: HttpClient,
                private activatedRoiuter:ActivatedRoute) { 
    
  }

  getPeliculas(): Observable<peliculas[]>{
    return this.http.get<peliculas[]>(this.bs +'/listMovie', httpOptions);
  }
  
  getPelicula(id: string | undefined): Observable<peliculas>{
    return this.http.get<peliculas>(this.bs +'/oneMovie/' + id, httpOptions)
  }

  getPeliculaTitulo(): Observable<peliculas[]>{
    return this.http.get<peliculas[]>(this.bs +'/searchMovie',httpOptions)
  }



  createPelicula(pelicula: peliculas): Observable<peliculas>{
    return this.http.post<peliculas>(this.bs +'/newMovie', pelicula, httpOptions)
  }
    
  updatePelicula(id: string | undefined, pelicula: peliculas): Observable<peliculas>{
    return this.http.put<peliculas>(this.bs + '/updateMovie/' + id, pelicula)
  }
  deletePelicula(id: string | undefined ): Observable<peliculas>{
    console.log(id);
    return this.http.delete<peliculas>(this.bs +'/deleteMovie/'+ id)
  }
  
}