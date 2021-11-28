import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Platillos } from '../models/platillos';


const baseURL = ""

@Injectable({
  providedIn: 'root'
})
export class PlatillosService {

  constructor(private http:HttpClient) { }

  registraplatillo(data:Platillos):Observable<any>{
    return this.http.post(baseURL+"",data);
  }

  consultaPlatilllo(filtro:String): Observable<Platillos[]>{
    if(filtro.trim()==''){
      return this.http.get<Platillos[]>(baseURL+"");
    }else {
      return this.http.get<Platillos[]>(baseURL+""+filtro);
    }
  }
    
  actualizaPlatillo(aux:Platillos): Observable<any>{
    return this.http.put<any>(baseURL+"",aux)
  }

}
