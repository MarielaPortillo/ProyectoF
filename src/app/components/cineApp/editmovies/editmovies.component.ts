import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { peliculas } from 'src/app/models/cineApp/pelicula';
import { PeliculaService } from 'src/app/service/cineApp/pelicula.service';

@Component({
  selector: 'app-editmovies',
  templateUrl: './editmovies.component.html',
  styleUrls: ['./editmovies.component.css']
})
export class EditmoviesComponent implements OnInit {

  pelicula: peliculas = {
    titulo : '',
    duracion: '',
    clasificacion:'',
    imagen:'',
    genero: '',
    estatus: 'Activa',
    fechaEstreno: '',
    precioBoleto: ''

  };
  edit: boolean = false;
  mensage = "Agregar pelicula";

  id: string | null | undefined;

  constructor(
    private allmovieService: PeliculaService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private http: HttpClient,
    private formBuilder: FormBuilder
    ) {
      //this.getDetalle();

    

     

     }

  ngOnInit(): void {

    const param = this.activateRoute.snapshot.params;
    console.log(param)
    if (param) {
      this.allmovieService.getPelicula(param.id)
      .subscribe(
        res => {
          console.log(res);
          this.pelicula = res;
          this.edit = true;
        },
        err => console.log(err)
      )
    }
    this.activateRoute.paramMap.subscribe((paramMap:any)=>{
      const{params}=paramMap
      console.log(params)
      this.pelicula = params
      
    })
    
  }

  updatePelicula(){
  
    this.allmovieService.updatePelicula(this.pelicula._id, this.pelicula)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/all-peliculas'])
      },
      err => console.log(err)
    )
  }

}