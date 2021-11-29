import { Component, OnInit } from '@angular/core';
import { Mesa } from 'src/app/models/mesa';
import { Platillos } from 'src/app/models/platillos';
import { Reserva } from 'src/app/models/reserva';
import { Socio } from 'src/app/models/socio';
import { MesaService } from 'src/app/service/mesa.service';
import { PlatillosService } from 'src/app/service/platillos.service';
import { ReservaService } from 'src/app/service/reserva.service';
import { SocioService } from 'src/app/service/socio.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-crudreserva',
  templateUrl: './crudreserva.component.html',
  styleUrls: ['./crudreserva.component.css']
})
export class CrudreservaComponent implements OnInit {
  
  reservas : Reserva[] = [];
  listaMesas: Mesa[] = [];
  listaSocios: Socio[] = [];
  listaPlatillos: Platillos[] = [];
  filtro: string = "";


  reserva: Reserva = {
    codreserva: 0,
    codmesa: {
      codmesa: 0
    },
    codigoso: {
      codigoso: 0
    },
    codigopro: {
      codigopro: 0
    },
    fechareserva: new Date(),
    comentario: "",

  }


  constructor(private tokenService: TokenService, private mesaService: MesaService, private socioService: SocioService, private platilloService: PlatillosService, private reservaService: ReservaService) { 

    this.mesaService.consultaMesa("todos").subscribe(
      
      mesas => {
        this.listaMesas = mesas;
      }
      
    );

    this.socioService.consultaSocio("todos").subscribe(
        socios =>{
          this.listaSocios = socios;
        }
    );

    this.platilloService.consultaPlatilllo("todos").subscribe(
       platillos =>{
         this.listaPlatillos = platillos
       }
    );

  }

  

  ngOnInit() {
  }

  
  consulta() {
    console.log("==> consulta = filtro ==> " + this.filtro);

  this.reservaService.consultaReserva(this.filtro).subscribe(
    response => this.reservas = response
  );


  }


  registra(){

    console.log(" ==> registra ==> filtro ==> " + this.reserva.codreserva);
    console.log(" ==> registra ==> nombre ==> " + this.reserva.fechareserva);
    console.log(" ==> registra ==> apellido ==> " + this.reserva.comentario);
      this.reservaService.registraReserva(this.reserva).subscribe(
        response => {
          alert(response.mensaje);
          var aux: string = this.filtro.trim() == '' ? "todos" : this.filtro.trim();
          this.reservaService.consultaReserva(aux).subscribe(
            response => this.reservas = response
          );
          this.reserva = {
            codreserva: 0,
            codmesa: {
              codmesa: 0
            },
            codigoso: {
              codigoso: 0
            },
            codigopro: {
              codigopro: 0
            },
            fechareserva: new Date(),
            comentario: "",
        
          }
        }


      );



  }


  actualiza(){
    console.log(" ==> registra ==> filtro ==> " + this.reserva.codreserva);
    console.log(" ==> registra ==> nombre ==> " + this.reserva.fechareserva);
    console.log(" ==> registra ==> apellido ==> " + this.reserva.comentario);
    this.reservaService.actualizarReserva(this.reserva).subscribe(
      response => {
        alert(response.mensaje);
        var aux: string = this.filtro.trim() == '' ? "todos" : this.filtro.trim();
        this.reservaService.consultaReserva(aux).subscribe(
          response => this.reservas = response
        );
        this.reserva = {
          codreserva: 0,
          codmesa: {
            codmesa: 0
          },
          codigoso: {
            codigoso: 0
          },
          codigopro: {
            codigopro: 0
          },
          fechareserva: new Date(),
          comentario: "",
      
        }
      }
    );
  }

  busca(aux: Reserva){
    console.log(" ==> busca ==> codpostulacion ==> " + aux.codreserva); 
    
    this.reserva = aux;
  
    this.reservaService.consultaReserva("todos").subscribe(
        
      response => this.reservas = response
   );
  
   this.mesaService.consultaMesa("todos").subscribe(
      
    mesas => {
      this.listaMesas = mesas;
    }
    
  );

  this.socioService.consultaSocio("todos").subscribe(
      socios =>{
        this.listaSocios = socios;
      }
  );

  this.platilloService.consultaPlatilllo("todos").subscribe(
     platillos =>{
       this.listaPlatillos = platillos
     }
  );
  
  }

  EliminaReserva(){
        
    console.log(" ==> registra ==> filtro ==> " + this.reserva.codreserva);
    console.log(" ==> registra ==> nombre ==> " + this.reserva.fechareserva);
    console.log(" ==> registra ==> apellido ==> " + this.reserva.comentario);

      var codreserva : number = Number(this.reserva.codreserva) == null ? 0 : Number( this.reserva.codreserva);
      
      this.reservaService.eliminaReserva(Number(this.reserva.codreserva)).subscribe(
        
        response => {
          this.reservas = response 

          var aux:String = this.filtro.trim()== '' ? "todos" : this.filtro.trim(); 

          this.reservaService.consultaReserva(aux).subscribe(
            response => this.reservas = response
          );

          this.reserva = {
            codreserva: 0,
            codmesa: {
              codmesa: 0
            },
            codigoso: {
              codigoso: 0
            },
            codigopro: {
              codigopro: 0
            },
            fechareserva: new Date(),
            comentario: "",
        
          }




        }

      )


   }

  onLogout(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

}
