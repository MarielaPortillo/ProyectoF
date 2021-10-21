import { HttpClient } from '@angular/common/http';
import { peliculas } from '../../../models/cineApp/pelicula';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculaService} from '../../../service/cineApp/pelicula.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddpeliculaComponent } from '../addpelicula/addpelicula.component';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css'],

})
export class PeliculaComponent implements OnInit {

  peliculas: peliculas[] = [];
  pelicula:peliculas= {} as peliculas;
  peli:any;
  displayedColumns: string[] = ['_id', 'Titulo', 'Genero', 'Clasificacion', 'Duracion', 'Acciones'];
  columns: string[] = ['Titulo', 'Genero', 'Clasificacion', 'Duracion',];
  columnas: string[] = ['Titulo', 'Genero', 'Clasificacion', 'Duracion', 'Acciones'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataSource: MatTableDataSource<peliculas>;
  
  
  constructor( private peliculaService: PeliculaService, 
    private http:HttpClient, 
    private route:ActivatedRoute,
    private dialog: MatDialog,
    ) { }

  ngOnInit(): void {

    this.getPeliculas();
    this.dataSource = new MatTableDataSource(this.peliculas);
    this.dataSource.paginator = this.paginator;
    
    this.route.paramMap.subscribe((paramMap:any)=>{
      const{params}=paramMap
      console.log(params)
      this.editPelicula(params._id)
      
    })
  }
  editPelicula(id: string | undefined ){
    
    this.peliculaService.getPelicula(id)
        .subscribe(
          response=>{
            console.log(response)
            this.pelicula=response;
          });
        
   
  }
  openDialog(pelicula?: peliculas) {
    this.dialog.open(AddpeliculaComponent, { data: { pelicula } })
  }

  eliminarPelicula(id: string) {
    if (confirm("estas seguro de eliminar este usuario?")) {
      this.peliculaService.deletePelicula(id)
      .subscribe(
        res => {
          this.getPeliculas();
        },)
    }
  }
  editar(id: string | undefined){
    
    this.peliculaService.updatePelicula(id, this.pelicula)
        .subscribe(
          response=>{
            this.pelicula=response;
          });
  }

  getPeliculas(){
    this.peliculaService.getPeliculas()
    .subscribe(
      (res :peliculas[]) => {
        console.log(res);
        this.peliculas = res ;
      },
      err => console.log(err),
    )
  }

  deletePelicula(id: string | undefined){

    this.peliculaService.deletePelicula(id)
    .subscribe(
      res => {
        this.getPeliculas();
      },
      err => console.log(err)
    )
  }






}


