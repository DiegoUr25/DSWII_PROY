import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { interceptorProvider } from './interceptors/prod-interceptor.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { CrudsocioComponent } from './components/crudsocio/crudsocio.component';
import { AddsocioComponent } from './components/addsocio/addsocio.component';
import { AddreservaComponent } from './components/addreserva/addreserva.component';
import { AddmesaComponent } from './components/addmesa/addmesa.component';
import { AddplatillosComponent } from './components/addplatillos/addplatillos.component';
import { CrudplatillosComponent } from './components/crudplatillos/crudplatillos.component';
import { CrudmesaComponent } from './components/crudmesa/crudmesa.component';
import { CrudreservaComponent } from './components/crudreserva/crudreserva.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    IndexComponent,
    CrudsocioComponent,
    AddsocioComponent,
    AddreservaComponent,
    AddmesaComponent,
    AddplatillosComponent,
    CrudplatillosComponent,
    CrudmesaComponent,
    CrudreservaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  // poner interceptorProvider en el providers:[]
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
