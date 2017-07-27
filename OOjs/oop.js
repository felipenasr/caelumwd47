var contaZe = new Conta();


function Conta (numero, tipo, saldo){
  this.numero = numero||0;
  this.tipo = tipo||null;
  this.saldo = saldo||0;
}
Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  return this.saldo
};
Conta.prototype.extrato = function () {
  return this.saldo;
};
Conta.prototype.sacar = function (valor) {
  return this.saldo -= valor  ;
};
Conta.prototype.transfere = function (valor, contaDestino) {
  this.sacar(valor);
  contaDestino.depositar(valor);
};

console.log(contaZe);
