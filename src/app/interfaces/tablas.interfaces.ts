


export interface Cliente {
  cedula: String;

  tipoDocumento: String;

  nombre: String;

  apellido: String;

  direccion: String;

  telefono: String;

  ciudad: String;

  email: String;

  idRepresentante: String|null;

  tipoIdRepresentante: String |null;

  idRecomendo?: String | null;

  tipoIdRecomendo?: String | null;

}

export interface Categoria{
  id_categoria: number;
  nombre:String;
  supercategoria?:number|null;
}
