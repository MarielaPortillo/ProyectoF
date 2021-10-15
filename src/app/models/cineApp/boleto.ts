import { Schema } from "mongoose";


export interface boletos {
    _id?: string;
    comercio: String;
    numBoleto: String;
    horario: String;
    sala: String;
    descuento: String;
    total:String;
   
}

