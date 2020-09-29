import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { Cliente } from '../../cliente/cliente';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: UserServiceService) { }

  ngOnInit(): void {
    this.clienteService.findAll().subscribe((data) => {
      this.clientes = data;
    })
  }

}
