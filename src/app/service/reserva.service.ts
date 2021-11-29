import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from '../models/reserva';

const baseURL= "http://localhost:8090/restaurante/reserva"

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private http:HttpClient) { }

  registraReserva(data:Reserva) :Observable<any>{
    return this.http.post(baseURL+"/registraReserva",data);
  }

  consultaReserva(filtro:String): Observable<Reserva[]>{
    if(filtro.trim() == ''){
      return this.http.get<Reserva[]>(baseURL+"/listaReservaPorNombreLike/todos");
    }else {
      return this.http.get<Reserva[]>(baseURL+"/listaReservaPorNombreLike/"+filtro);
    }
  }

  actualizarReserva(aux:Reserva) : Observable<any>{
    return this.http.put<any>(baseURL+"/actualizarReserva",aux)
  }

  eliminaReserva(codreserva: number) : Observable<any>{
  

    return this.http.delete<any>(baseURL+"/eliminarReservaporId/"+ codreserva)
  }


}
