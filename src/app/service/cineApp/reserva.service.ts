
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { reservas } from '../../models/cineApp/reserva';



@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  bs: string = 'http://localhost:3000';

  constructor(private http: HttpClient,
                private activatedRoiuter:ActivatedRoute) { 
    
  }

  getReservas(): Observable<reservas[]>{
    return this.http.get<reservas[]>(this.bs +'/listReserva', );
  }
  
  getReserva(id: string | undefined): Observable<reservas>{
    return this.http.get<reservas>(this.bs +'/UnaReserva/' + id, )
  }


  createReserva(reserva: reservas): Observable<reservas>{
    return this.http.post<reservas>(this.bs +'/nuevaReserva', reserva, )
  }
    
  updateReserva(id: string | undefined, reserva: reservas): Observable<reservas>{
    return this.http.put<reservas>(this.bs + '/editarReserva/' + id, reserva)
  }
  deleteReserva(id: string | undefined ): Observable<reservas>{
    console.log(id);
    return this.http.delete<reservas>(this.bs +'/deleteReserva/'+ id)
  }
}
