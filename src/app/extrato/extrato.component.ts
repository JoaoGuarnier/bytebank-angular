import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../services/models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  @Input() transferencias: any[];

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
    //this.transferencias = this.service.transferencias;
    this.service.buscarTransferencias().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.transferencias = transferencias
    });
  }

}
