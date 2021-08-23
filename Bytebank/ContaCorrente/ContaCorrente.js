import { Conta } from "../Contas/Conta.js";
export class ContaCorrente extends Conta {
    
    constructor(saldoInicial,cliente,agencia){
        super(saldoInicial,cliente,agencia)
    }

    sacar(valor){

        let taxaSaque = 1.2;  
        //console.log(taxaSaque)      
        let valorSaque = taxaSaque * valor
        if(this._saldo> valorSaque){
            this._saldo -= valorSaque;
        }
    }
}

