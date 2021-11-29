import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from '../models/reserva';

const baseURL= ""

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private http:HttpClient) { }

  registraReserva(data:Reserva) :Observable<any>{
    return this.http.post(baseURL+"",data);
  }

  consultaReserva(filtro:String): Observable<Reserva[]>{
    if(filtro.trim() == ''){
      return this.http.get<Reserva[]>(baseURL+"");
    }else {
      return this.http.get<Reserva[]>(baseURL+""+filtro);
    }
  }

  actualizarReserva(aux:Reserva) : Observable<any>{
    return this.http.put<any>(baseURL+"",aux)
  }

  eliminaReserva(codreserva: number) : Observable<any>{
  

    return this.http.delete<any>(baseURL+"//"+ codreserva)
  }


}
