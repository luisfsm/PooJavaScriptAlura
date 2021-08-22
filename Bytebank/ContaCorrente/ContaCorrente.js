export class ContaCorrente{
    agencia = "1001";
    _saldo = 0;    

    recuperaSaldo(){
        return this._saldo;
    }

    DepositarSaldo(saldo){
        if(saldo<=0) return;
        
        this._saldo += saldo
    }

    sacar(valor){
        if(valor> this._saldo){
            console.log("Saldo insuficiente");
        }else{
            this._saldo-= valor;
            return this.valor;
        }
    }
    transferencia(ContaCorrente){

    }

}

