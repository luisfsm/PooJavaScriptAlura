import { Cliente } from "../Clientes/Cliente.js";
export class Conta{
    constructor(saldoInicial, cliente,agencia){
        this._saldo = saldoInicial
        this._cliente = cliente
        this._agencia = agencia
        Conta.contador++
    }

    static contador = 0;

    set cliente(novoCliente){

        if(novoCliente instanceof Cliente){
            this._cliente =    novoCliente
        }
    }

    get saldo(){
        return this._saldo;
    }

    get cliente(){
        return this._cliente
    }
    
    get agencia(){
        return this._agencia
     }


         
    recuperaSaldo(){
        return this._saldo;
    }

    DepositarSaldo(saldo){
        if(saldo<=0) return;
        
        this._saldo += saldo
    }

    sacar(valor){

        let taxaSaque = 1;        
        let valorSaque = taxaSaque * valor
        if(this._saldo> valorSaque){
            this._saldo -= valorSaque;
        }
    }
    transferencia(valor,ContaCorrente){
        this.sacar(valor)
        ContaCorrente.DepositarSaldo(valor);
    }



}