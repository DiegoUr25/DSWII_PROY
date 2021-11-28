import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mesa } from '../models/mesa';

//LLENAR LOS ESPACIOS VACÍOS

const baseURL = ""

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  constructor(private http:HttpClient) { }

  registraMesa(data:Mesa):Observable<any>{
    return this.http.post(baseURL+"",data);
  }

  consultaMesa(filtro:String):Observable<Mesa[]>{
    if(filtro.trim() == ''){
      return this.http.get<Mesa[]>(baseURL+"");

    }else{
      return this.http.get<Mesa[]>(baseURL+""+filtro);
    }

  }

  actualizaMesa(aux:Mesa) : Observable<any>{
    return this.http.put<any>(baseURL+"", aux)
  }

}
