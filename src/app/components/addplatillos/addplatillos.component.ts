import { Component, OnInit } from '@angular/core';
import { Platillos } from 'src/app/models/platillos';
import { PlatillosService } from 'src/app/service/platillos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-addplatillos',
  templateUrl: './addplatillos.component.html',
  styleUrls: ['./addplatillos.component.css']
})
export class AddplatillosComponent implements OnInit {

  platillo: Platillos={
    codigopro:0,
    detallepro:"",
    precioxunipro:0.0,
    stockpro:0
  }


  constructor(private tokenService: TokenService,
    private platilloService:PlatillosService) { }

  onLogout(): void {
    this.tokenService.logOut();
    window.location.reload();
  }
  insertPlatillo(){
    console.log(this.platillo);
    this.platilloService.registraplatillo(this.platillo).subscribe(
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
