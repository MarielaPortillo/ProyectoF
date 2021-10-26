import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { peliculas } from 'src/app/models/cineApp/pelicula';
import { Comercio } from 'src/app/models/comercio/comercio';
import { Comentario } from 'src/app/models/publicacion/comentario';
import { Detalle } from 'src/app/models/publicacion/detalle';
import { DetalleService } from 'src/app/service/publicacion/detalle.service';

@Component({
  selector: 'app-add-publicacion',
  templateUrl: './add-publicacion.component.html',
  styleUrls: ['./add-publicacion.component.css'],
  providers: [DetalleService]
})
export class AddPublicacionComponent implements OnInit {

  comentario: Comentario[]= [];
  comercios: Comercio[]= [];
  peliculas: peliculas[]= [];
  detalles: Detalle[]= [];
  detalle: Detalle = {
    comercio:'',
    director: '',
    actores: '',
    sinopsis: '',
    imagen: '',
    pelicula: '',
    views: 0,
    likes: 0,
  };
  edit: boolean = false;
  mensage = "Agregar pelicula";
  id: string | null | undefined;


  constructor(
    private detalleService: DetalleService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private http: HttpClient,
    ) {}

  ngOnInit(): void {
    this.getPeliculas()
    this.getComercio()

    const param = this.activateRoute.snapshot.params;
    console.log(param)
    this.activateRoute.paramMap.subscribe((paramMap:any)=>{
      const{params}=paramMap

      this.getpublicacion(params.id);
      
    })
  }
  getOneMovie(){
    this.detalleService.Movies()
    .subscribe(
      res => {
        this.peliculas = res ;
      },
      err => console.log(err)
    )
  }
  getComercio(){
    this.detalleService.comercios()
    .subscribe(
      (res :Comercio[]) => {
        console.log(res);
        this.comercios = res ;
      },
      err => console.log(err),
    )
  }
  getPublicaciones(){
    this.detalleService.listPublicacion()
    .subscribe(
      (res :Detalle[]) => {
        console.log(res);
        this.detalles = res ;
      },
      err => console.log(err),
    )
  }
  getPeliculas(){
    this.detalleService.Movies()
    .subscribe(
      (res :peliculas[]) => {
        console.log(res);
        this.peliculas = res ;
      },
      err => console.log(err),
    )
  }
  submitPublicacion(){
    this.detalleService.createPublicacion(this.detalle)
    .subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
  }
  getpublicacion(id: string){
    /*this.detalleService.onePublicacion(id)
    .subscribe(
      res => {
        this.detalle = res ;
      },
      err => console.log(err)
    )*/
  }

}
