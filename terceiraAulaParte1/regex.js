let entrada = 101010101;
console.log(entrada);

if (/^\d{5}\-?\d{3}$/.test(entrada)) {
  // console.log('deu certo');
}else{
  // console.log('errado');
}

let dado = prompt('email');
var confere = dado.match(/^[0-9A-z\.\-]{1,}\@\w{2,}\.[A-z]{2,3}(\.[A-z]{2})?/);


if(confere){
  console.log('deu certo');
}else{
  console.log('deu errado');
}
