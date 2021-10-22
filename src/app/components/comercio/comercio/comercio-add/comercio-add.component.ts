import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/comercio/categoria';
import { Comercio } from 'src/app/models/comercio/comercio';
import { ComercioService } from 'src/app/service/comercio/comercio.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-comercio-add',
  templateUrl: './comercio-add.component.html',
  styleUrls: ['./comercio-add.component.css']
})
export class ComercioAddComponent implements OnInit {

  
  categorias: Categoria[]= [];
  comercios: Comercio[]= [];
  comercio: Comercio = {} as Comercio;
  edit: boolean = false;
  mensage = "Agregar pelicula";
  id: any;
  mapa: mapboxgl.Map
  hide: boolean = true;

  miFormulario!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ComercioAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private comercioService: ComercioService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private http: HttpClient,
    private formBuilder: FormBuilder
    ) {}

  ngOnInit(): void {
    this.getCategoria();
    (mapboxgl as any).accessToken = environment.tokenmapa;
    this.mapa = new mapboxgl.Map({
      container: 'contentmapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-88.93886745727536, 14.040336479634533],
      zoom: 15.5
    });
    this.mapa.on("click", (event) => {
      const { lng, lat } = event.lngLat;
      this.comercio.lng = lng;
      this.comercio.lat = lat;
      console.log("Este el el primero",this.comercio.lng)
      console.log("Este el el segundo",this.comercio.lat)
    })
    
    this.crearMarcador(-88.93886745727536, 14.040336479634533)
    
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

  crearMarcador(lng: number, lat: number){
    const marker = new mapboxgl.Marker({
      draggable: true
    })
    .setLngLat([lng,lat])
    .addTo(this.mapa)
    marker.on('dragend', ()=>{
      console.log(marker.getLngLat())
      const { lng, lat } = marker.getLngLat()
      this.comercio.lng = lng;
      this.comercio.lat = lat;
      console.log(this.comercio.lng)
      console.log(this.comercio.lat)
    })
    
  }

  submitComercios(){
    console.log(this.comercio)

    this.comercioService.createComercio(this.comercio)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/list-comercios']);
      },
      err => console.log(err)
    )
  }
  updateComercios(){
    this.comercioService.editComercio(this.comercio._id, this.comercio)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/list-users'])
      },
      err => console.log(err)
    )
  }

}
