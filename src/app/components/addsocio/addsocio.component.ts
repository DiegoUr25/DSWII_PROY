import { Component, OnInit } from '@angular/core';
import { Socio } from 'src/app/models/socio';
import { SocioService } from 'src/app/service/socio.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-addsocio',
  templateUrl: './addsocio.component.html',
  styleUrls: ['./addsocio.component.css']
})
export class AddsocioComponent implements OnInit {



  socio: Socio = {
    codigoso:0,
    nombreso:"",
    apellidoso:"",
    dniso:"",
    telefonoso:"",
    estadoso:0,

  }




  constructor(private tokenService: TokenService, private socioService: SocioService  ) { }

  ngOnInit() {
  }

  insertSocio(){
    console.log(this.socio);
    this.socioService.registraSocio(this.socio).subscribe(

     response =>{
       console.log(response.mensaje);
       alert(response.mensaje)
     },
           error => {
             console.log(error);
           },
     
     
     
    );
  }

  onLogout(): void {
    this.tokenService.logOut();
    window.location.reload();
  }



}
