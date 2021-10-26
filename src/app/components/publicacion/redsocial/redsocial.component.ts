import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { peliculas } from 'src/app/models/cineApp/pelicula';
import { comentarios } from 'src/app/models/comentario';
import { Detalle } from 'src/app/models/publicacion/detalle';
import { DetalleService } from 'src/app/service/publicacion/detalle.service';

@Component({
  selector: 'app-redsocial',
  templateUrl: './redsocial.component.html',
  styleUrls: ['./redsocial.component.css']
})
export class RedsocialComponent implements OnInit {

  peliculas: peliculas[] = [];
  comentarios:comentarios= {} as comentarios;
  detalles: Detalle[] = [];
  detalle:Detalle= {} as Detalle;
  peli:any;
  
  
  
  constructor( private publicacionService: DetalleService, 
    private http:HttpClient, 
    private activateRoute:ActivatedRoute,
    private ruta: Router,
    ) { }

  ngOnInit(): void {

    this.getPeliculas();

    /*this.route.paramMap.subscribe((paramMap:any)=>{
      const{params}=paramMap
      console.log(params)
      this.viewsAument(params._id)
      
    })*/
    const param = this.activateRoute.snapshot.params;
    console.log(param)
    if (param) {
      this.publicacionService.onePublicacion(param.id)
      .subscribe(
        res => {
          console.log(res);
          this.detalle = res;
        },
        err => console.log(err)
      )
    }
    
  }
  viewsAument(id: string | undefined ){
    this.publicacionService.aumentarViews(id)
        .subscribe(
          response=>{
            console.log(response)
            this.detalle=response;
          });
        
  }
  
  eliminarPelicula(id: string) {
    if (confirm("estas seguro de eliminar este usuario?")) {
      this.publicacionService.deletePublicacion(id)
      .subscribe(
        res => {
          this.getPeliculas();
        },)
    }
  }
  likes(id: string | undefined){
    this.publicacionService.aumentarLike(id, this.detalle)
    .subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
  }
  comentar(){
    this.publicacionService.createComentario(this.detalle._id, this.comentarios)
    .subscribe(
      res => {
        console.log(res);
        this.ruta.navigate(['/publicacion/'+ this.detalle._id]);
      },
      err => console.log(err)
    )
  }
  
  getPeliculas(){
    this.publicacionService.listPublicacion()
    .subscribe(
      (res :Detalle[]) => {
        console.log(res);
        this.detalles = res ;
      },
      err => console.log(err),
    )
  }

  deletePelicula(id: string | undefined){

    this.publicacionService.deletePublicacion(id)
    .subscribe(
      res => {
        this.getPeliculas();
      },
      err => console.log(err)
    )
  }






}