import { Schema } from "mongoose";


export interface peliculas {
    _id?: string;
    titulo: String;
   duracion: String;
   clasificacion: String;
   genero: String;
   imagen: String;
   estatus:String;
   fechaEstreno:String;
   precioBoleto: String;
  
}

