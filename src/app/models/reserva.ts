import { Mesa } from "./mesa";
import { Platillos } from "./platillos";
import { Socio } from "./socio";

export class Reserva {

  codreserva?:number;
  codmesa?:Mesa;
  codigoso?:Socio;
  codigopro?:Platillos;
  fechareserva?:Date;
  comentario?:String;

}
