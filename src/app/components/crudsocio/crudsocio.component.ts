import { Component, OnInit } from '@angular/core';
import { Socio } from 'src/app/models/socio';
import { SocioService } from 'src/app/service/socio.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-crudsocio',
  templateUrl: './crudsocio.component.html',
  styleUrls: ['./crudsocio.component.css']
})
export class CrudsocioComponent implements OnInit {

  constructor(private tokenService: TokenService, private socioService: SocioService ) {}
    socios: Socio[] = [];
    filtro: string = "";

    socio: Socio = {
      codigoso:0,
      nombreso:"",
      apellidoso:"",
      dniso:"",
      telefonoso:"",
      estadoso: 0,
  
    } 

    consulta() {
      console.log("==> consulta = filtro ==> " + this.filtro);
      this.socioService.consultaSocio(this.filtro).subscribe(
        response => this.socios = response
  
      );
    }

    registra() {
      console.log(" ==> registra ==> filtro ==> " + this.socio.codigoso);
      console.log(" ==> registra ==> nombre ==> " + this.socio.nombreso);
      console.log(" ==> registra ==> apellido ==> " + this.socio.apellidoso);
  
      this.socio.estadoso = 1;
  
      this.socioService.registraSocio(this.socio).subscribe(
  
        response => {
          alert(response.mensaje);
  
          var aux: string = this.filtro.trim() == '' ? "todos" : this.filtro.trim();
  
          this.socioService.consultaSocio(aux).subscribe(
  
            response => this.socios = response
  
          );
  
          this.socio = {
            codigoso:0,
            nombreso:"",
            apellidoso:"",
            dniso:"",
            telefonoso:"",
            estadoso: 0,
        
          } 
  
        }
  
      );
  
  
  
  
  
    }

    getEstado(estadoso: number): string {
      if (estadoso == 1) {
        return "ACTIVO";
      } else {
        return "INACTIVO";
      }
  
  
    }


    getTextoBoton(estadoso: number): string {
      if (estadoso == 0) {
        return "ACTIVAR";
      } else {
        return "DESACTIVAR"
      }
  
    }

    actualizaEstado(aux: Socio) {
      console.log(' ==> En actualizaEstado() ');
  
      this.socio = aux;
      this.socio.estadoso = aux.estadoso == 1 ? 0 : 1;
  
      this.socioService.actualizaSocio(this.socio).subscribe(
        (response) => {
          console.log(response.mensaje);
          var aux: string = this.filtro.trim() == '' ? 'todos' : this.filtro.trim();
  
          this.socioService
            .consultaSocio(aux)
            .subscribe(response => this.socios = response);
            this.socio = {
              codigoso:0,
              nombreso:"",
              apellidoso:"",
              dniso:"",
              telefonoso:"",
              estadoso: 0,
          
            } ,
          (error) => {
            console.log(error);
          }
        }
      );
    }


    actualiza() {

      console.log(" ==> registra ==> filtro ==> " + this.socio.codigoso);
      console.log(" ==> registra ==> nombre ==> " + this.socio.nombreso);
      console.log(" ==> registra ==> apellido ==> " + this.socio.apellidoso);
           
  
      this.socioService.actualizaSocio(this.socio).subscribe(
  
        response => {
          alert(response.mensaje);
  
          var aux: string = this.filtro.trim() == '' ? "todos" : this.filtro.trim();
  
          this.socioService
            .consultaSocio(aux)
            .subscribe(response => this.socios = response);
            this.socio = {
              codigoso:0,
              nombreso:"",
              apellidoso:"",
              dniso:"",
              telefonoso:"",
              estadoso: 0,
          
            } 
        }
      );
  
    }

    busca(aux: Socio) {
      console.log(" ==> busca ==> codpostulacion ==> " + aux.codigoso);
  
      this.socio = aux;
    }
    

  ngOnInit() {
  }

  onLogout(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

}
