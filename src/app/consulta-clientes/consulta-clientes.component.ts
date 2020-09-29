import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { Cliente } from '../models/cliente/cliente';
// import { UserServiceService } from '../Services/user-service.service';

@Component({
  selector: 'app-consulta-clientes',
  templateUrl: './consulta-clientes.component.html',
  styleUrls: ['./consulta-clientes.component.css'],
})
export class ConsultaClientesComponent {

  // cliente: Cliente;

  constructor(
    // private router: Router,
    // private clienteService: UserServiceService
  ) {
    // this.cliente = new Cliente();
  }

  // onSubmit() {
  //   this.clienteService
  //     .save(this.cliente)
  //     .subscribe((result) => this.gotoClienteList());
  // }

  // gotoClienteList() {
  //   this.router.navigate(["/ConsultaCliente"]);
  // }
}
