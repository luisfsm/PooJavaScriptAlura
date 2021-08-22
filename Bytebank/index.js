
import { Cliente } from "./Clientes/Cliente.js";
import { ContaCorrente } from "./ContaCorrente/ContaCorrente.js";
const cliente = new Cliente();

cliente.nome = "Luis Felipe";
cliente.cpf ="1112938111";
console.log(cliente)

const contaCorrenteCLiente = new ContaCorrente();

contaCorrenteCLiente.DepositarSaldo(100)
const valorSacado= contaCorrenteCLiente.sacar(50)
console.log(contaCorrenteCLiente)
