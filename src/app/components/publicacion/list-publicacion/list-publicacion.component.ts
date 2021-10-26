import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { peliculas } from 'src/app/models/cineApp/pelicula';
import { Comentario } from 'src/app/models/publicacion/comentario';
import { Detalle } from 'src/app/models/publicacion/detalle';
import { DetalleService } from 'src/app/service/publicacion/detalle.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddPublicacionComponent } from '../add-publicacion/add-publicacion.component';
import { comentarios } from 'src/app/models/comentario';

@Component({
  selector: 'app-list-publicacion',
  templateUrl: './list-publicacion.component.html',
  styleUrls: ['./list-publicacion.component.css']
})
export class ListPublicacionComponent implements OnInit {

  peliculas: peliculas[] = [];
  comentarios:comentarios= {} as comentarios;
  detalles: Detalle[] = [];
  detalle:Detalle= {} as Detalle;
  peli:any;
  displayedColumns: string[] = ['_id', 'Director', 'Actores', 'Pelicula', 'Views', 'Lkes', 'Acciones'];
  columns: string[] = ['Titulo', 'Genero', 'Clasificacion', 'Duracion',];
  columnas: string[] = ['Director', 'Actores', 'Pelicula', 'Views', 'Lkes', 'Acciones'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataSource: MatTableDataSource<peliculas>;
  
  
  constructor( private publicacionService: DetalleService, 
    private http:HttpClient, 
    private route:ActivatedRoute,
    private ruta: Router,
    private dialog: MatDialog,
    ) { }

  ngOnInit(): void {

    this.getPeliculas();
    this.dataSource = new MatTableDataSource(this.peliculas);
    this.dataSource.paginator = this.paginator;

    /*this.route.paramMap.subscribe((paramMap:any)=>{
      const{params}=paramMap
      console.log(params)
      this.viewsAument(params._id)
      
    })*/
    
    
  }
  viewsAument(id: string | undefined ){
    
    this.publicacionService.aumentarViews(id)
        .subscribe(
          response=>{
            console.log(response)
            this.detalle=response;
          });
        
   
  }
  
  openDialog(detalle?: Detalle) {
    this.dialog.open(AddPublicacionComponent, { data: { detalle } })
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
        this.ruta.navigate(['/publicacion/'+ this.detalle._id]);
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



