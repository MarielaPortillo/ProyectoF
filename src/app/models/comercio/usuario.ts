import { Mongoose, Schema } from "mongoose";
export interface users {
    _id?: string ;
    username: string, 
    email: string, 
    password: string, 
    rol?: string
  
  
}