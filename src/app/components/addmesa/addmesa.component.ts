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
    codmesa:0,
    capacidad:0,
    idtipoest:0,
    descmesa:""
  }

  constructor(private tokenService:TokenService,private mesaService: MesaService){
  }

  onLogout(): void {
    this.tokenService.logOut();
    window.location.reload();
  }
  insertMesa(){
    console.log(this.mesa);
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
