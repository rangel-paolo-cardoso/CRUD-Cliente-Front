import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ConsultaClientesComponent } from './consulta-clientes/consulta-clientes.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { AppRoutingModule } from './app-routing-module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginPageComponent,
    HomePageComponent,
    ConsultaClientesComponent,
    CadastroClienteComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
