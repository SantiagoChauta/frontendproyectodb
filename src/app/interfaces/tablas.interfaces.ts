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

  idRepresentante?: String;

  tipoIdRepresentante?: String;

  idRecomendo?: String ;

  tipoIdRecomendo?: String;

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

export interface Representante {
  cedula:        string;
  tipoDocumento: string;
  nombre:        string;
  apellido:      string;
  direccion:     string;
  telefono:      string;
  email:         string;
  genero:        string;
  estado?:        string;
  f_nacimiento:  string;
  f_contrato:    string;
  idRegion?:      number;
  idPais?:        number;
  idManager?:     null;
  tipoIdManager?: null;
}

export interface ProductoCarrito {
  idCliente:       string;
  tipodocumento:   string;
  id_producto:     number;
  nombre_producto: string;
  foto:            string;
  cantidad:        number;
  precio:          number;
  iva:             number;
  id_pais:         number;
  id_region:       number;
}
