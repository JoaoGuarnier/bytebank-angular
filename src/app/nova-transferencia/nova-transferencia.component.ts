import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";
import { TransferenciaService } from "../services/transferencia.service";


@Component({
    selector: "app-nova-transferencia",
    templateUrl: "./nova-transferencia.component.html",
    styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {


  @Output() aoTransferir = new EventEmitter<any>()

  valor: number
  destino: number

  constructor(private service: TransferenciaService, private router: Router) {

  }

  transferir() {
    console.log("Transferência solicitada")
    const valorParaEmitir = {
      valor: this.valor,
      destino: this.destino
    }
    //this.aoTransferir.emit(valorParaEmitir)
    this.service.adicionarTransferencia(valorParaEmitir).subscribe(result => {
      this.router.navigateByUrl("extrato");
    },
    error => console.error(error));
    
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }

}
