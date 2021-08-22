import { Cliente } from "./Clientes/Cliente.js";
import { ContaCorrente } from "./ContaCorrente/ContaCorrente.js";

const cliente = new Cliente("Luis Felipe","1112938111");
const contaCorrenteCLiente = new ContaCorrente(cliente,1001);
contaCorrenteCLiente.DepositarSaldo(200)


const cliente2 = new Cliente("Glauber","1112938111");
const contaCorrenteCLiente2 = new ContaCorrente(cliente2,1001);
contaCorrenteCLiente2.DepositarSaldo(200)

contaCorrenteCLiente.transferencia(100, contaCorrenteCLiente2)

console.log(contaCorrenteCLiente)
console.log(contaCorrenteCLiente2)
console.log(ContaCorrente.contador)
