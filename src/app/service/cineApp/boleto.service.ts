import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { horarios } from 'src/app/models/cineApp/horarios';
import { peliculas } from 'src/app/models/cineApp/pelicula';
import { salas } from 'src/app/models/cineApp/salas';
import { boletos } from '../../models/cineApp/boleto';



@Injectable({
  providedIn: 'root'
})
export class BoletoService {
  bs: string = 'http://localhost:3000';

  constructor(private http: HttpClient,
                private activatedRoiuter:ActivatedRoute) { 
    
  }

  getBoletos(): Observable<boletos[]>{
    return this.http.get<boletos[]>(this.bs +'/listboletos', );
  }

  getSalas(): Observable<salas[]>{
    return this.http.get<salas[]>(this.bs +'/listSalas', );
  }

  gethorarios(): Observable<horarios[]>{
    return this.http.get<horarios[]>(this.bs +'/listHora', );
  }

  getPeliculas(): Observable<peliculas[]>{
    return this.http.get<peliculas[]>(this.bs +'/listMovie', );
  }


  getBoleto(id: string | undefined): Observable<boletos>{
    return this.http.get<boletos>(this.bs +'/listboleto/' + id, )
  }

  createBoletos(boleto: boletos): Observable<boletos>{
    return this.http.post<boletos>(this.bs +'/create/boleto', boleto, )
  }
    
  updateBoletos(id: string | undefined, boleto: boletos): Observable<boletos>{
    return this.http.put<boletos>(this.bs + '/editarboleto/' + id, boleto)
  }
  deleteBoletos(id: string | undefined ): Observable<boletos>{
    console.log(id);
    return this.http.delete<boletos>(this.bs +'/eliminarboleto/'+ id)
  }


}
