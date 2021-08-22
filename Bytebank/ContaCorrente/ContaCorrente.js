export class ContaCorrente{
    agencia = "1001";
    _saldo = 0;    
    _cliente;


    AdicionarCliente(cliente){
        this._cliente = cliente
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

