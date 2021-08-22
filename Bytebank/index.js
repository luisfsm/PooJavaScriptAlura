import { Cliente } from "./Clientes/Cliente.js";
import { ContaCorrente } from "./ContaCorrente/ContaCorrente.js";

const cliente = new Cliente();
const contaCorrenteCLiente = new ContaCorrente();
contaCorrenteCLiente.DepositarSaldo(200)
contaCorrenteCLiente.AdicionarCliente(cliente)
contaCorrenteCLiente._cliente.nome = "Luis Felipe";
contaCorrenteCLiente._cliente.cpf ="1112938111";


const cliente2 = new Cliente();
const contaCorrenteCLiente2 = new ContaCorrente();
contaCorrenteCLiente2.DepositarSaldo(200)
contaCorrenteCLiente2.AdicionarCliente(cliente2)
contaCorrenteCLiente2._cliente.nome = "Glauber";
contaCorrenteCLiente2._cliente.cpf ="1112938111";


contaCorrenteCLiente.transferencia(100, contaCorrenteCLiente2)

console.log(contaCorrenteCLiente)
console.log(contaCorrenteCLiente2)
