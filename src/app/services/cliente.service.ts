import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private getUrl: string = 'http://localhost:8080/ConsultaClientes';

  constructor(private httpClient: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.getUrl).pipe(
      map((response) => response)
    );
  }

  saveCliente(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(this.getUrl, cliente);
  }
}
