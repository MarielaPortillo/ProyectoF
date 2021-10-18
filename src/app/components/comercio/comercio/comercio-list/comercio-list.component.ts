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

    (Mapboxgl as any).accessToken = environment.tokenmapa;
    this.mapa = new Mapboxgl.Map({
      container: 'contenedormapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-88.93, 14.04],
      zoom: 10
    });
    this.getComercios();

    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap



    })
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
  abrir = (comerci: Comercio) => {
    console.log("Se abrió el popup del comercio: " + comerci.nombreComercio)
  }

  cerrar = (comerci: Comercio) => {
    console.log("Se cerró el popup del comercio: " + comerci.nombreComercio)
  }


  marcador(comerci: Comercio) {

    const globo = new Mapboxgl.Popup({ className: 'globito' })
      .setHTML(`<p> ${comerci.nombreComercio} </p>`)
      .on('open', () => { this.abrir(comerci) })
      .on('close', () => { this.cerrar(comerci) })
    const marca = new Mapboxgl.Marker({
      draggable: true,
      color: "orange"
    })
      .setLngLat([comerci.lng, comerci.lat])
      .setPopup(globo)
      .addTo(this.mapa);

    marca.on('dragend',()=>{ console.log(marca.getLngLat()) });

  }
  getComercios() {
    this.comercioService.listComercio()
      .subscribe(
        (res: Comercio[]) => {
          console.log(res);
          this.comercios = res;
          this, this.comercios.forEach(co => {
            this.marcador(co);
          })
        },
        err => console.log(err),
      )
  }


}
