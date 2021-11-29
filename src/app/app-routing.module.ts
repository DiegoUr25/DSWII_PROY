import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { ProdGuardService as guard } from './guards/prod-guard.service';
import { AddmesaComponent } from './components/addmesa/addmesa.component';
import { AddsocioComponent } from './components/addsocio/addsocio.component';
import { AddreservaComponent } from './components/addreserva/addreserva.component';
import { AddplatillosComponent } from './components/addplatillos/addplatillos.component';
import { CrudplatillosComponent } from './components/crudplatillos/crudplatillos.component';
import { CrudsocioComponent } from './components/crudsocio/crudsocio.component';
import { CrudreservaComponent } from './components/crudreserva/crudreserva.component';
import { CrudmesaComponent } from './components/crudmesa/crudmesa.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  
  
  {path:"addmesa", component:AddmesaComponent },
  {path:"addsocio", component:AddsocioComponent} ,
  {path:"addreserva", component:AddreservaComponent } ,
  {path:"addplatillos", component:AddplatillosComponent } ,
  {path:"crudmesa", component:CrudmesaComponent }  ,
   {path:"crudreserva",component:CrudreservaComponent},
   {path:"crudsocio",component:CrudsocioComponent} ,
   {path:"crudplatillos",component:CrudplatillosComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
