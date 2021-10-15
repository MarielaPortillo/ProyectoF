export interface Comentario {
    _id?: string;
    detalle: String,
    email: { type: String, require:true },
    comentario: { type: String },
}