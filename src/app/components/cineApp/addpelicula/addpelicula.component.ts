import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {peliculas} from '../../../models/cineApp/pelicula';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculaService } from '../../../service/cineApp/pelicula.service';


import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';



@Component({
  selector: 'app-addpelicula',
  templateUrl: './addpelicula.component.html',
  styleUrls: ['./addpelicula.component.css'],
  providers: [PeliculaService]
})
export class AddpeliculaComponent implements OnInit {

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


  miFormulario!: FormGroup;





  constructor(
    private allmovieService: PeliculaService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private http: HttpClient,
    private formBuilder: FormBuilder
    ) {
      //this.getDetalle();
      this.miFormulario = new FormGroup({

        'titulo' : new FormControl('',[Validators.required,Validators.minLength(2)]),
        'duracion': new FormControl('',[Validators.required,Validators.maxLength(15)]),
        'clasificacion':  new FormControl('',[Validators.required,Validators.maxLength(1)]),
        'imagen': new FormControl('',),
        'genero': new FormControl('',),
        'estatus': new FormControl('',),
        'fechaEstreno': new FormControl('',),
        'precioBoleto': new FormControl('',)
      });
      console.log(this.miFormulario.value);
    
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
    
  }

  submitMovies(){
    this.allmovieService.createPelicula(this.miFormulario.value)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/all-peliculas']);
      },
      err => console.log(err)
    )
  }
  updatePelicula(){
  
    this.allmovieService.updatePelicula(this.pelicula._id, this.pelicula)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/all-movies'])
      },
      err => console.log(err)
    )
  }

}


