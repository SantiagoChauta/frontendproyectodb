export interface Usuario{
  usuario:String;
  password:String;
}


export interface Cliente {
  cedula: String;

  tipoDocumento: String;

  nombre: String;

  apellido: String;

  direccion: String;

  telefono: String;

  ciudad: String;

  email: String;

  idRepresentante?: String|null;

  tipoIdRepresentante?: String |null;

  idRecomendo?: String | null;

  tipoIdRecomendo?: String | null;

}

export interface Categoria{
  id_categoria: number;
  nombre:String;
  supercategoria?:number|null;
}

export interface Producto{
  id_producto:       number;
   nombre_producto:   string;
   foto:              string;
   descripcion:       string;
   precio:            number;
   iva:               number;
   id_categoria:      number;
   categoria:         string;
   id_supercategoria: number;
   stock:             number;
   id_region:         number;
   region:            string;
   id_pais:           number;
   pais:              string;
}
