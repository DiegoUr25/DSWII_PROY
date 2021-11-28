import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { basename } from 'path';
import { Observable } from 'rxjs';
import { Socio } from '../models/socio';

const baseURL = ""

@Injectable({
  providedIn: 'root'
})
export class SocioService {

  constructor(private http:HttpClient) { }


  registraSocio(data:Socio): Observable<any>{
    return this.http.post(baseURL+"",data);
  }

  consultaSocio(filtro:String): Observable<Socio[]>{
    if(filtro.trim()==''){
      return this.http.get<Socio[]>(baseURL+"");
    }else{
      return this.http.get<Socio[]>(baseURL+""+filtro);
    }
  }

  actualizaSocio(aux:Socio):Observable<any>{
    return this.http.put<any>(baseURL+"", aux)
  }

}
