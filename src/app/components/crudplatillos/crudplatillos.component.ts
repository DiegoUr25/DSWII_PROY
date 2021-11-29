import { Component, OnInit } from '@angular/core';
import { Platillos } from 'src/app/models/platillos';
import { PlatillosService } from 'src/app/service/platillos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-crudplatillos',
  templateUrl: './crudplatillos.component.html',
  styleUrls: ['./crudplatillos.component.css']
})
export class CrudplatillosComponent implements OnInit {

  constructor(private tokenService:TokenService, private platilloService:PlatillosService) { }
  
  platillo: Platillos={
    codigopro:0,
    detallepro:"",
    precioxunipro:0.0,
    stockpro:0
  }

  filtro: string = "";
  platillos : Platillos[]=[];

  consulta(){
    console.log("==> consulta = filtro ==> " + this.filtro);
    this.platilloService.consultaPlatilllo(this.filtro).subscribe(
      response => this.platillos = response
    );
  }
  
  registra(){
    //this.platillo = 1;
    this.platilloService.registraplatillo(this.platillo).subscribe(
      response => {
        alert(response.mensaje);
        var aux: string = this.filtro.trim() == '' ? "todos" : this.filtro.trim();
        this.platilloService.consultaPlatilllo(aux).subscribe(
          response => this.platillos = response
        );
        this.platillo = {
          codigopro:0,
          detallepro:"",
          precioxunipro:0.0,
          stockpro:0
        }
      }
    );
  }
  
  actualizaEstado(aux: Platillos){
    console.log(' ==> En actualizaEstado() ');
    this.platillo = aux;
    this.platilloService.actualizaPlatillo(this.platillo).subscribe(
      response => {
        console.log(response.mensaje);
        var aux: string = this.filtro.trim() == '' ? 'todos' : this.filtro.trim();
        this.platilloService
          .consultaPlatilllo(aux)
          .subscribe((response) => (this.platillos = response));
          
          (error) =>{
            console.log(error);
          };
      }
    );
  }
  
  actualiza(){
    this.platilloService.actualizaPlatillo(this.platillo).subscribe(
      response => {
        alert(response.mensaje);
        var aux: string = this.filtro.trim() == '' ? "todos" : this.filtro.trim();
        this.platilloService.consultaPlatilllo(aux).subscribe(
          response => this.platillos = response
        );
        this.platillo = {
          codigopro:0,
          detallepro:"",
          precioxunipro:0.0,
          stockpro:0
        }
      }
    );
  }
  
  busca(aux: Platillos){
    console.log(" ==> busca ==> codpostulacion ==> " + aux.codigopro); 
    this.platillo = aux;

  }

  onLogout(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  ngOnInit() {
  }

}
