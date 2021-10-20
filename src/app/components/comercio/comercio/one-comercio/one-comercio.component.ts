import { Component, OnInit } from '@angular/core';
import { Comercio } from 'src/app/models/comercio/comercio';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { ComercioService } from 'src/app/service/comercio/comercio.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-comercio',
  templateUrl: './one-comercio.component.html',
  styleUrls: ['./one-comercio.component.css']
})
export class OneComercioComponent implements OnInit {

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
      center: [-88.93886745727536, 14.040336479634533],
      zoom: 15.5
    });
    var id = "616c9b4340e63571f40beebb";
    this.getComercio();

    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap



    })
  }

  abrir = (comerci: Comercio) => {
    console.log("Se abrió el popup del comercio: " + comerci.nombreComercio)
  }

  cerrar = (comerci: Comercio) => {
    console.log("Se cerró el popup del comercio: " + comerci.nombreComercio)
  }


  marcador(comerci: Comercio) {

    const globo = new Mapboxgl.Popup({ className: 'globito' })
      .setHTML(`<p> ${comerci.nombreComercio} </p>
                <p>Contactenos al: </p>
                <p> +503 ${comerci.telefono} </p>
                <p> ${comerci.redes_sociales} </p>
                `)
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
          console.log(res,+"algo para distinguir comentarios");
          this.comercios = res;
        },
        err => console.log(err),
      )
  }
  getComercio() {
    
    this.comercioService.oneComercio(this.comercio._id)
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
