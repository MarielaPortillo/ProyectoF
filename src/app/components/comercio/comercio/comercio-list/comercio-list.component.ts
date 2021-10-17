import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comercio } from 'src/app/models/comercio/comercio';
import { ComercioService } from 'src/app/service/comercio/comercio.service';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-comercio-list',
  templateUrl: './comercio-list.component.html',
  styleUrls: ['./comercio-list.component.css']
})
export class ComercioListComponent implements OnInit {

  comercios: Comercio[] = [];
  comercio: Comercio = {} as Comercio;
  comer: any;
  mapa: Mapboxgl.Map;

  constructor(
    private comercioService: ComercioService,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {

    this.getComercios();
   
    (Mapboxgl as any).accessToken = environment.tokenmapa;
    this.mapa = new Mapboxgl.Map({
      container: 'contenedormapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-88.94, 14.04],
      zoom: 16.6
    });

    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap



    })
  }



  getComercios() {
    this.comercioService.listComercio()
      .subscribe(
        (res: Comercio[]) => {
          console.log(JSON.stringify(res));
          this.comercios = res;
        },
        err => console.log(err),
      )
  }

  deletePelicula(id: string) {

    this.comercioService.deleteComercio(id)
      .subscribe(
        res => {
          this.getComercios();
        },
        err => console.log(err)
      )
  }
  abrir = () => {
    console.log("Se abrió el popup del comercio: " + this.comercio.nombreComercio)
  }

  cerrar = () => {
    console.log("Se cerró el popup del comercio: " + this.comercio.nombreComercio)
  }


  marcador() {

    this.comercioService.listComercio()
      .subscribe(
        (res: Comercio[]) => {
          console.log(res);
          this.comercios = res;
          const globo = new Mapboxgl.Popup({ className: 'globito' })
            .setHTML(`<p> ${this.comercio.nombreComercio} </p>`)
            .on('open', () => { this.abrir() })
            .on('close', () => { this.cerrar() })
          const marca = new Mapboxgl.Marker({
            draggable: true,
            color: "orange"
          })
            .setLngLat([this.comercio.lng, this.comercio.lat])
            .setPopup(globo)
            .addTo(this.mapa);

          marca.on('dragend', () => { console.log(marca.getLngLat()) });
        },
        err => console.log(err),
      )

  }



}
