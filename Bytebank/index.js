
import { Cliente } from "./Clientes/Cliente.js";
import { ContaCorrente } from "./ContaCorrente/ContaCorrente.js";

const cliente = new Cliente();


const contaCorrenteCLiente = new ContaCorrente();

contaCorrenteCLiente.DepositarSaldo(100)
const valorSacado= contaCorrenteCLiente.sacar(50)
console.log(contaCorrenteCLiente)
