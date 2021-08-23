import {Conta} from "../Contas/Conta.js"
export class ContaPoupanca extends Conta {
   
    
    constructor(saldoInicial, cliente,agencia){
        super(saldoInicial,cliente,agencia);
    } 

    /*    
    sacar(valor){

        let taxaSaque = 1.1;        
        let valorSaque = taxaSaque * valor
        if(this._saldo> valorSaque){
            this._saldo -= valorSaque;
        }
    }*/
        
}