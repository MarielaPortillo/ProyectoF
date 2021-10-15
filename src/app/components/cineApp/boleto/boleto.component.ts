import { Component, OnInit } from '@angular/core';
import { BoletoService } from '../../../service/cineApp/boleto.service';
import {boletos} from '../../../models/cineApp/boleto';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-boleto',
  templateUrl: './boleto.component.html',
  styleUrls: ['./boleto.component.css'],
  providers: [BoletoService]
})
export class BoletoComponent implements OnInit {


  boleto: boletos = {
    comercio: '',
    numBoleto:'',
    horario: '',
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
    private router: Router,
    private activateRoute: ActivatedRoute,
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) { 

    this.miFormulario = new FormGroup({
      'comercio' : new FormControl('',),
      'numBoleto': new FormControl('',[Validators.required,Validators.maxLength(15)]),
      'horario':  new FormControl('',),
      'sala': new FormControl('',),
      'descuento': new FormControl('',),
      'total': new FormControl('',)
    });
    console.log(this.miFormulario.value);
  
   }
  

  ngOnInit(): void {

    
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