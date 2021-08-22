import { Conta } from "../Contas/Conta.js";
export class ContaCorrente extends Conta {
    
    constructor(saldoInicial,cliente,agencia){
        super(saldoInicial,cliente,agencia)
    }
}

