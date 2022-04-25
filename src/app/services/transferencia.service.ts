import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Transferencia } from './models/transferencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia: any[];
  private url: string = "http://localhost:3000/transferencias"

  constructor(private httpClient: HttpClient) { 
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  adicionar(transferencia: any) {
    this.hidratar(transferencia);
    this.transferencias.push(transferencia);
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }

  buscarTransferencias(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionarTransferencia(transferencia: Transferencia): Observable<Transferencia> {
    this.hidratar(transferencia);
      return this.httpClient.post<Transferencia>(this.url, transferencia)
  }

}
