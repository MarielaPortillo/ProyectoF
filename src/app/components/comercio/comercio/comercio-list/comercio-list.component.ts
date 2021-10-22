import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comercio } from 'src/app/models/comercio/comercio';
import { ComercioService } from 'src/app/service/comercio/comercio.service';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { NgForm } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ComercioAddComponent } from '../comercio-add/comercio-add.component';

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
  addMapa: Mapboxgl.Map;
  displayedColumns: string[] = ['_id', 'nombreComercio', 'telefono', 'redes_sociales', 'acciones'];
  columns: string[] = ['nombreComercio', 'telefono', 'redes_sociales'];
  columnas: string[] = ['nombreComercio', 'telefono', 'redes_sociales', 'acciones'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataSource: MatTableDataSource<Comercio>;

  constructor(
    public comercioService: ComercioService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private dialog: MatDialog,
  ) {

  }

  ngOnInit(): void {

    (Mapboxgl as any).accessToken = environment.tokenmapa;
    this.mapa = new Mapboxgl.Map({
      container: 'contenedormapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-88.93886745727536, 14.040336479634533],
      zoom: 15.5
    });
    this.getComercios();
    

    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap



    })
  }

  openDialog(comercio?: Comercio) {
    this.dialog.open(ComercioAddComponent, { data: { comercio } })
  }
  editComercio(id: string | undefined ){
    
    this.comercioService.oneComercio(id)
        .subscribe(response=>{
            console.log(response)
            this.comercios=response;
          });
        
   
  }
  eliminarComercio(id: string) {
    if (confirm("estas seguro de eliminar este usuario?")) {
      this.comercioService.deleteComercio(id)
      .subscribe(
        res => {
          this.getComercios();
        },)
    }
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
