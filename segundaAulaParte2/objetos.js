console.log('=======objetos=======');


var carro = {};

// PROPRIEDADES(CARACTERISTICAS)
carro.modelo='Tucson';
carro.ano = '2014';
carro.fabricante = 'Hyundai';
carro.cor = 'Prata';
carro.ligado = false;


// MÉTODOS (AÇÕES)

carro.ligar = function () {
  carro.ligado = true;
}
carro.desligar = function () {
  carro.ligado = false;
}
