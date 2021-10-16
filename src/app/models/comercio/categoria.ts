

export interface Categoria {
    _id?: string;
    categoria: { type: String, min: 4, require: true },
}