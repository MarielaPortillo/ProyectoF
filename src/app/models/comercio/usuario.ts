
export interface User {
    _id?: string;
    username: {type:String, require:true, unique:true},
    email: {type:String, require:true, unique:true},
    password: {type:String, require:true},
    rol: {type:String},
  
  
}