import { Component, OnInit } from '@angular/core';
import { BoletoService } from '../../../service/cineApp/boleto.service';
import {boletos} from '../../../models/cineApp/boleto';
import {salas} from '../../../models/cineApp/salas';
import {horarios} from '../../../models/cineApp/horarios';
import {Comercio} from '../../../models/comercio/comercio';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { peliculas } from 'src/app/models/cineApp/pelicula';
import { ComercioService } from 'src/app/service/comercio/comercio.service';

@Component({
  selector: 'app-boleto',
  templateUrl: './boleto.component.html',
  styleUrls: ['./boleto.component.css'],
  providers: [BoletoService]
})
export class BoletoComponent implements OnInit {

  pelicula: peliculas[] = [];
  comercio: Comercio[] = [];
  sala:salas[]=[];
  horario:horarios[]=[];


  boleto: boletos = {
    comercio: '',
    pelicula: '',
    numBoleto:'',
    horario: '',
    precio:'',
    sala: '',
    descuento: '',
    total:''

  };
  edit: boolean = false;
  mensage = "Agregar boleto";

  id: string | null | undefined;
  miFormulario!: FormGroup;



  constructor(
    private boletoService: BoletoService, 
    private comercioService: ComercioService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) { 

    this.miFormulario = new FormGroup({
      'comercio' : new FormControl('',),
      'pelicula' : new FormControl('',),
      'numBoleto': new FormControl('',[Validators.required,Validators.maxLength(15)]),
      'horario':  new FormControl('',),
      'sala': new FormControl('',),
      'precio': new FormControl('',),
      'descuento': new FormControl('',),
      'total': new FormControl('',)
    });
    console.log(this.miFormulario.value);
  
   }
  

  ngOnInit(): void {

    this.getPelicula();
    this.getComercio();
    this.getSala();
    this.getHorario();
    
  }


  getPelicula(){
    this.boletoService.getPeliculas()
    .subscribe(
      (res :peliculas[]) => {
        console.log(res);
        this.pelicula = res ;
      },
      err => console.log(err),
    )
  }

  getHorario(){
    this.boletoService.gethorarios()
    .subscribe(
      (res :horarios[]) => {
        console.log(res);
        this.horario = res ;
      },
      err => console.log(err),
    )
  }

  getSala(){
    this.boletoService.getSalas()
    .subscribe(
      (res :salas[]) => {
        console.log(res);
        this.sala = res ;
      },
      err => console.log(err),
    )
  }

  getComercio(){
    this.comercioService.listComercio()
    .subscribe(
      (res :Comercio[]) => {
        console.log(res);
        this.comercio = res ;
      },
      err => console.log(err),
    )
  }



  submitBoletos(){
    this.boletoService.createBoletos(this.miFormulario.value)
    .subscribe(
      res => {
        console.log(res);
        //this.router.navigate(['/add-pelicula']);
      },
      err => console.log(err)
    )
  }

  updateBoletos(){
  
    this.boletoService.updateBoletos(this.boleto._id, this.miFormulario.value)
    .subscribe(
      res => {
        console.log(res);
       // this.router.navigate(['/add-pelicula'])
      },
      err => console.log(err)
    )
  }



}