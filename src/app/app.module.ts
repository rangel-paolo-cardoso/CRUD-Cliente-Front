import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ConsultaClientesComponent } from './consulta-clientes/consulta-clientes.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    PageNotFoundComponent,
    LoginPageComponent,
    HomePageComponent,
    ConsultaClientesComponent,
    CadastroClienteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: LoginPageComponent },
      {
        path: 'MainScreen',
        component: MainScreenComponent,
        children: [
          { path: '', component: HomePageComponent },
          { path: 'ConsultaClientes', component: ConsultaClientesComponent },
          { path: 'CadastroCliente', component: CadastroClienteComponent }
        ]
      },
      // { path: 'ConsultaClientes', component: ConsultaClientesComponent },
      { path: '**', component: PageNotFoundComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
