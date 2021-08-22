import { Cliente } from "./Clientes/Cliente.js";
import { ContaCorrente } from "./ContaCorrente/ContaCorrente.js";

const cliente = new Cliente("Luis Felipe","1112938111");
const contaCorrenteCLiente = new ContaCorrente();
contaCorrenteCLiente.DepositarSaldo(200)
contaCorrenteCLiente._cliente = cliente


const cliente2 = new Cliente("Glauber","1112938111");
const contaCorrenteCLiente2 = new ContaCorrente();
contaCorrenteCLiente2.DepositarSaldo(200)
contaCorrenteCLiente2._cliente = cliente2


contaCorrenteCLiente.transferencia(100, contaCorrenteCLiente2)

console.log(contaCorrenteCLiente)
console.log(contaCorrenteCLiente2)
