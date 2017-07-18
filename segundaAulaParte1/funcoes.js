console.log('=======funcoes=======');

// expressão nomeada
function saudacao() {
  const msg = 'Boa Noite!';
  alert(msg);
}
// expressão anonima
var mensagem = function () {
  const msg = 'Boa Noite!';
  console.log(msg);
}

function multiplicacao(a,b) {
  let calc = a * b;
  return calc;
}
let soma = function (a,b,c) {
  let total = a+b+c;
  return total || 0;
}

function sum() {
  let total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total = total + arguments[i];
  }
  return total;
}

function sumVdois() {
  let total = 0;
  let args =[].slice.call(arguments);
  args.forEach(function (value, key) {
    total = total + value;
  });

  return total;
}
