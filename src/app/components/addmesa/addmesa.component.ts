import { Component, OnInit } from '@angular/core';
import { Mesa } from 'src/app/models/mesa';
import { MesaService } from 'src/app/service/mesa.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-addmesa',
  templateUrl: './addmesa.component.html',
  styleUrls: ['./addmesa.component.css']
})
export class AddmesaComponent implements OnInit {

  mesa: Mesa={
    capacidad:0,
    idtipoest:0,
    descmesa:""
  }
//Mesa
  constructor(private tokenService:TokenService,private mesaService: MesaService){
  }

  onLogout(): void {
    this.tokenService.logOut();
    window.location.reload();
  }
  insertMesa(){
    console.log(this.mesa);
    this.mesa.idtipoest=0
    this.mesaService.registraMesa(this.mesa).subscribe(
      response => {
        console.log(response.mensaje);
        alert(response.mensaje)
      },
      error =>{
        console.log(error);
      },
    );
  }
  
  ngOnInit() {
  }

}
