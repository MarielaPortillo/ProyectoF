import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../../../service/cineApp/reserva.service';
import { PeliculaService } from '../../../service/cineApp/pelicula.service';
import {reservas} from '../../../models/cineApp/reserva';
import {peliculas} from '../../../models/cineApp/pelicula';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  Pelicula: peliculas[] = [];
  //seleccionado: peliculas;
  Reserva: reservas[]=[];
  reser:any;

  reserva: reservas = {
    NVenta: '',
    pelicula: '',
    cantidad: '',
    total: '',
    fechaReser: '',
  };
  



  edit: boolean = false;
  mensage = "Agregar reserva";

  id: string | null | undefined;
  miFormulario!: FormGroup;

  constructor(
    private reservaService: ReservaService, 
    private peliculaService: PeliculaService, 
    private router: Router,
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) { 
    this.miFormulario = new FormGroup({
      'NVenta' : new FormControl('',),
      'pelicula': new FormControl('',),
      'cantidad':  new FormControl('',),
      'total': new FormControl('',),
      'fechaReser': new FormControl('',)
    });
    console.log(this.miFormulario.value);
  }

  ngOnInit(): void {
    this.getPelicula();
  }


  getPelicula(){
    this.peliculaService.getPeliculas()
    .subscribe(
      (res :peliculas[]) => {
        console.log(res);
        this.Pelicula = res ;
      },
      err => console.log(err),
    )
  }

  getUnaReserva(id: string | undefined){
    this.reservaService.getReserva(id)
    .subscribe(
      (res :reservas) => {
        console.log(res);
        this.reser = res ;
      },
      err => console.log(err),
    )
  }







  submitReservas(){
    this.reservaService.createReserva(this.miFormulario.value)
    .subscribe(
      res => {
        console.log(res);
       // this.router.navigate(['/add-pelicula']);
      },
      err => console.log(err)
    )
  }

  updateReservas(){
  
    this.reservaService.updateReserva(this.reserva._id, this.miFormulario.value)
    .subscribe(
      res => {
        console.log(res);
      // this.router.navigate(['/add-pelicula'])
      },
      err => console.log(err)
    )
  }




}
