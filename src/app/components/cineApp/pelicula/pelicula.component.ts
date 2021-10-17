import { HttpClient } from '@angular/common/http';
import { peliculas } from '../../../models/cineApp/pelicula';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculaService} from '../../../service/cineApp/pelicula.service';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  peliculas: peliculas[] = [];
  pelicula:peliculas= {} as peliculas;
  peli:any;
  
  constructor( private peliculaService: PeliculaService, 
    private http:HttpClient, 
    private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.getPeliculas();

    this.route.paramMap.subscribe((paramMap:any)=>{
      const{params}=paramMap

      this.editar(params.variable)
      
    })
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


