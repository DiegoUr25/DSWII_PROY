import { Component, OnInit } from '@angular/core';
import { Mesa } from 'src/app/models/mesa';
import { MesaService } from 'src/app/service/mesa.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-crudmesa',
  templateUrl: './crudmesa.component.html',
  styleUrls: ['./crudmesa.component.css']
})
export class CrudmesaComponent implements OnInit {

  mesa: Mesa={
    codmesa:0,
    capacidad:0,
    idtipoest:0,
    descmesa:""
  }

  filtro: string = "";
  mesas : Mesa[]=[];

  constructor(private mesaService:MesaService, private tokenService:TokenService) {
   }

   consulta(){
    console.log("==> consulta = filtro ==> " + this.filtro);
    this.mesaService.consultaMesa(this.filtro).subscribe(
      response => this.mesas = response
    );
  }
  
  registra(){
    this.mesa.idtipoest = 1;
    this.mesaService.registraMesa(this.mesa).subscribe(
      response => {
        alert(response.mensaje);
        var aux: string = this.filtro.trim() == '' ? "todos" : this.filtro.trim();
        this.mesaService.consultaMesa(aux).subscribe(
          response => this.mesas = response
        );
        this.mesa = {
          codmesa:0,
          capacidad:0,
          idtipoest:0
        }
      }
    );
  }
  
  getEstado(estado: number): string{
    if(estado == 1){
      return "ACTIVO";
    }else{
      return "INACTIVO";
    }
  }
  
  actualizaEstado(aux: Mesa){
    console.log(' ==> En actualizaEstado() ');
    this.mesa = aux;
    this.mesa.idtipoest = aux.idtipoest == 1 ? 0 : 1;
    this.mesaService.actualizaMesa(this.mesa).subscribe(
      response => {
        console.log(response.mensaje);
        var aux: string = this.filtro.trim() == '' ? 'todos' : this.filtro.trim();
        this.mesaService
          .consultaMesa(aux)
          .subscribe((response) => (this.mesas = response));
          
          (error) =>{
            console.log(error);
          };
      }
    );
  }
  
  actualiza(){
    this.mesaService.actualizaMesa(this.mesa).subscribe(
      response => {
        alert(response.mensaje);
        var aux: string = this.filtro.trim() == '' ? "todos" : this.filtro.trim();
        this.mesaService.consultaMesa(aux).subscribe(
          response => this.mesas = response
        );
        this.mesa = {          
          codmesa:0,
          capacidad:0,
          idtipoest:0
        }
      }
    );
  }
  
  busca(aux: Mesa){
    console.log(" ==> busca ==> codmesa ==> " + aux.codmesa); 
    
    this.mesa = aux;
  
    this.mesaService.consultaMesa("todos").subscribe(
        
      response => this.mesas = response
   );
  
  
  }
  
    onLogout(): void {
      this.tokenService.logOut();
      window.location.reload();
    }

  ngOnInit() { 
  }

}
