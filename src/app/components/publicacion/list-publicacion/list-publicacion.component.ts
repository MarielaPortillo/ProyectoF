import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Comentario } from 'src/app/models/publicacion/comentario';
import { Detalle } from 'src/app/models/publicacion/detalle';
import { DetalleService } from 'src/app/service/publicacion/detalle.service';

@Component({
  selector: 'app-list-publicacion',
  templateUrl: './list-publicacion.component.html',
  styleUrls: ['./list-publicacion.component.css']
})
export class ListPublicacionComponent implements OnInit {

  rol: Comentario[]= [];
  detalles: Detalle[]= [];
  detalle: Detalle = {
    
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

  miFormulario!: FormGroup;

  constructor(
    private detalleService: DetalleService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private http: HttpClient,
    private formBuilder: FormGroup
    ) {
      //this.getDetalle();
      this.miFormulario = new FormGroup({

        'director' : new FormControl('',[Validators.required]),
        'actores': new FormControl('',[Validators.required]),
        'sinopsis':  new FormControl('',[Validators.required]),
        'imagen': new FormControl('',[Validators.required]),
        'pelicula':  new FormControl('',[Validators.required]),
      });
      console.log(this.miFormulario.value);

     }

  ngOnInit(): void {
    this.getPublicaciones();

    const param = this.activateRoute.snapshot.params;
    console.log(param)
    this.activateRoute.paramMap.subscribe((paramMap:any)=>{
      const{params}=paramMap

      this.getpublicacion(params.id);
      
    })
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
  submitUsers(){
    this.detalleService.createPublicacion(this.miFormulario.value)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/publicacion']);
      },
      err => console.log(err)
    )
  }
  getpublicacion(id: string){
    this.detalleService.onePublicacion(id)
    .subscribe(
      res => {
        this.detalles = res ;
      },
      err => console.log(err)
    )
  }

}


