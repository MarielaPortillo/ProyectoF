import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as mapboxgl from 'mapbox-gl';
import { Categoria } from 'src/app/models/comercio/categoria';
import { Comercio } from 'src/app/models/comercio/comercio';
import { ComercioService } from 'src/app/service/comercio/comercio.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-comercio-edit',
  templateUrl: './comercio-edit.component.html',
  styleUrls: ['./comercio-edit.component.css']
})
export class ComercioEditComponent implements OnInit {

  categorias: Categoria[]= [];
 
  comercio: Comercio = {
    nombreComercio : '',
    propietario: '',
    lng:0,
    lat:0,
    telefono: '',
    redes_sociales: '',
    categoria: '',
    logo: '',
    descripcion: ''

  };
  edit: boolean = false;

  id: string | undefined;
  mapa: mapboxgl.Map;

  constructor(
    private comercioService: ComercioService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private http: HttpClient,
    private formBuilder: FormBuilder
    ) {
      //this.getDetalle();

     }

  ngOnInit(): void {
    this.getCategoria();

    /*(mapboxgl as any).accessToken = environment.tokenmapa;
    this.mapa = new mapboxgl.Map({
      container: 'contenedormapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-88.93886745727536, 14.040336479634533],
      zoom: 15.5
    });
    this.getComercio(this.comercio._id);*/
    const param = this.activateRoute.snapshot.params;
    console.log(param)
    if (param) {
      this.comercioService.oneComercio(param.id)
      .subscribe(
        res => {
          console.log(res);
          this.comercio = res;
          this.edit = true;
        },
        err => console.log(err)
      )
    }
    
    this.activateRoute.paramMap.subscribe((paramMap:any)=>{
      const{params}=paramMap
      console.log(params)
      this.comercio = params
      
    })

  }
  getCategoria(){
    this.comercioService.getCategoria()
    .subscribe(
      (res :Categoria[]) => {
        console.log(res);
        this.categorias = res ;
      },
      err => console.log(err),
    )
  }
  updateComercio(){
  
    this.comercioService.editComercio(this.comercio._id, this.comercio)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/list-comercios'])
      },
      err => console.log(err)
    )
  }

}