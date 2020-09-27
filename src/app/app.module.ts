import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ConsultaClientesComponent } from './consulta-clientes/consulta-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    PageNotFoundComponent,
    LoginPageComponent,
    HomePageComponent,
    ConsultaClientesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: LoginPageComponent },
      { path: 'MainScreen', component: MainScreenComponent },
      { path: 'ConsultaClientes', component: ConsultaClientesComponent },
      { path: '**', component: PageNotFoundComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
