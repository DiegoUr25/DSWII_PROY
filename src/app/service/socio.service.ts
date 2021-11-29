import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socio } from '../models/socio';

const baseURL = "http://localhost:8090/restaurante/socio"

@Injectable({
  providedIn: 'root'
})
export class SocioService {

  constructor(private http:HttpClient) { }


  registraSocio(data:Socio): Observable<any>{
    return this.http.post(baseURL+"/registraSocio",data);
  }

  consultaSocio(filtro:String): Observable<Socio[]>{
    if(filtro.trim()==''){
      return this.http.get<Socio[]>(baseURL+"/listaSocioPorNombreLike/todos");
    }else{
      return this.http.get<Socio[]>(baseURL+"/listaSocioPorNombreLike/"+filtro);
    }
  }

  consultaEstadoSocio(): Observable<Socio[]>{
    return this.http.get<Socio[]>(baseURL+"/listaSocioPorEstadoLike/1")
  }


  actualizaSocio(aux:Socio):Observable<any>{
    return this.http.put<any>(baseURL+"/actualizarSocio", aux)
  }

}
