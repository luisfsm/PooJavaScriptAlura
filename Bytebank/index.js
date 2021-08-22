//import Cliente from '/Cliente/Cliente.js'
class Cliente {
    nome;
    cpf;
}

class ContaCorrente{
    agencia = "1001";
    saldo = 0;    
}


cliente = new Cliente();

cliente.nome = "Luis Felipe";
cliente.cpf ="1112938111";


console.log(cliente)