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
  selector: 'app-addreserva',
  templateUrl: './addreserva.component.html',
  styleUrls: ['./addreserva.component.css']
})
export class AddreservaComponent implements OnInit {
  listaMesas: Mesa[] = [];
  listaSocios: Socio[] = [];
  listaPlatillos: Platillos[] = [];

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

  onLogout(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  insertReserva(){
    console.log(this.reserva);
    this.reservaService.registraReserva(this.reserva).subscribe(
      response =>{
        console.log(response.mensaje);
        alert(response.mensaje)
      },
      error =>{
        console.log(error);
      },

    );
  }


}
