import { Cliente } from "../Clientes/Cliente.js";
export class ContaCorrente{
    agencia = "1001";
    _saldo = 0;    
    _cliente;

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

    recuperaSaldo(){
        return this._saldo;
    }

    DepositarSaldo(saldo){
        if(saldo<=0) return;
        
        this._saldo += saldo
    }

    sacar(valor){
        if(this._saldo> valor){
            this._saldo -= valor;
        }
    }
    transferencia(valor,ContaCorrente){
        this.sacar(valor)
        ContaCorrente.DepositarSaldo(valor);
    }

}

