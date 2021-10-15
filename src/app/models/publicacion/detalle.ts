export interface Detalle {
    _id?: string;
    director: { type: String },
    actores: { type: String },
    sinopsis: { type: String },
    imagen: { type: String },
    pelicula: { type: String },
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },

}