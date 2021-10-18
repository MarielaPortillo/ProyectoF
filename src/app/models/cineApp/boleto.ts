import { Schema } from "mongoose";


export interface boletos {
    _id?: string;
    comercio: String;
    numBoleto: String;
    pelicula:string;
    horario: String;
    sala: String;
    precio: string;
    descuento: String;
    total:String;
   
}

