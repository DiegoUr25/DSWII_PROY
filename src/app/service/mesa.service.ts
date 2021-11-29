import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mesa } from '../models/mesa';

//LLENAR LOS ESPACIOS VACÍOS

const baseURL = "http://localhost:8090/restaurante/mesa"

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  constructor(private http:HttpClient) { }

  registraMesa(data:Mesa):Observable<any>{
    return this.http.post(baseURL+"/registraMesa",data);
  }

  consultaMesa(filtro:String):Observable<Mesa[]>{
    if(filtro.trim() == ''){
      return this.http.get<Mesa[]>(baseURL+"/listaMesaPorNombreLike/todos");

    }else{
      return this.http.get<Mesa[]>(baseURL+"/listaMesaPorNombreLike/"+filtro);
    }

  }

  consultaEstadoMesa():Observable<any>{
    return this.http.get<Mesa[]>(baseURL+"/listaMesaPorEstadoLike/1");
  }



  actualizaMesa(aux:Mesa) : Observable<any>{
    return this.http.put<any>(baseURL+"/actualizarMesa", aux)
  }

}
