import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente/cliente';
import { Observable } from 'rxjs/';

@Injectable()
export class UserServiceService {

  private clienteURL: string;

  constructor(private http: HttpClient) {
    this.clienteURL = 'http://localhost:8080';
  }

  public findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.clienteURL);
  }

  public save(cliente: Cliente) {
    return this.http.post<Cliente>(this.clienteURL, cliente);
  }
}
