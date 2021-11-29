import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Platillos } from '../models/platillos';


const baseURL = "http://localhost:8090/restaurante/platillos"

@Injectable({
  providedIn: 'root'
})
export class PlatillosService {

  constructor(private http:HttpClient) { }

  registraplatillo(data:Platillos):Observable<any>{
    return this.http.post(baseURL+"/registraPlatillo",data);
  }

  consultaPlatilllo(filtro:String): Observable<Platillos[]>{
    if(filtro.trim()==''){
      return this.http.get<Platillos[]>(baseURL+"/listaPlatilloPorNombreLike/todos");
    }else {
      return this.http.get<Platillos[]>(baseURL+"/listaPlatilloPorNombreLike/"+filtro);
    }
  }
    
  actualizaPlatillo(aux:Platillos): Observable<any>{
    return this.http.put<any>(baseURL+"/actualizarPlatillo",aux)
  }

}
